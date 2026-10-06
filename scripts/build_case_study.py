#!/usr/bin/env python3

# export const caseStudy: CaseStudy = {
#   slug, meta, seo, hero, challenge, gaps, solution,
#   testLab, timeline, stack, results, faq, cta
# }



"""
build_case_study.py

Scans ./doc for .docx files. For each one, extracts every heading, paragraph
and table, splits them into the 12 parts of the case-study kit, and writes:

    content/case-studies/<slug>.ts

The TS file exposes both:
  * the curated public-page sections (hero, challenge, ..., cta, seo)
  * parts[] — the complete 12-part backing document, every table preserved

Usage:
    python scripts/build_case_study.py
    python scripts/build_case_study.py --only "Clickmasters-AI-Lead-Response-Case-Study.docx"
    python scripts/build_case_study.py --only "..." --slug "ai-receptionist-lead-response-automation"

Requires:
    pip install python-docx
"""

import argparse
import json
import re
import sys
from pathlib import Path

try:
    from docx import Document
    from docx.table import Table
    from docx.text.paragraph import Paragraph
except ImportError:
    print("Missing dependency. Run:  pip install python-docx", file=sys.stderr)
    sys.exit(1)


PROJECT_ROOT = Path(__file__).resolve().parent.parent
DOC_DIR      = PROJECT_ROOT / "doc"
OUT_DIR      = PROJECT_ROOT / "content" / "case-studies"


# --------------------------------------------------------------------------- #
#  Cleaning                                                                    #
# --------------------------------------------------------------------------- #

PAGE_MARKER = re.compile(r"^=====\s*Page\s+(\d+)\s*=====$")
NUMBER_SPAM = re.compile(r"^(\s*\d+\s*){4,}$")
TABLE_DUP   = re.compile(r"^(Table\s+\d+\s*:\s*)+", re.I)
MULTI_BLANK = re.compile(r"\n{3,}")
ESCAPES = [
    (r"\(", "("), (r"\)", ")"), (r"\[", "["), (r"\]", "]"),
    (r"\$", "$"), (r"\%", "%"), (r"\&", "&"), (r"\_", "_"),
    (r"\#", "#"), (r"\-", "-"), (r"\+", "+"), (r"\*", "*"),
]
BAD_PAGES = {41, 43, 67, 22}  # OCR-garbled pages to skip entirely


def clean_line(line: str) -> str:
    line = line.strip()
    if not line or NUMBER_SPAM.match(line):
        return ""
    line = TABLE_DUP.sub("Table: ", line)
    for a, b in ESCAPES:
        line = line.replace(a, b)
    return line


def clean_text(text: str) -> str:
    lines = [clean_line(l) for l in text.splitlines()]
    return MULTI_BLANK.sub("\n\n", "\n".join(l for l in lines if l)).strip()


def slugify(name: str) -> str:
    name = Path(name).stem.lower()
    name = re.sub(r"[^a-z0-9]+", "-", name)
    return name.strip("-")


# --------------------------------------------------------------------------- #
#  Extraction — every heading, para, table                                    #
# --------------------------------------------------------------------------- #

def extract_blocks(docx_path: Path):
    doc = Document(str(docx_path))
    current_page = 0

    for child in doc.element.body.iterchildren():
        tag = child.tag.split("}")[-1]

        if tag == "p":
            p = Paragraph(child, doc)
            text = p.text.strip()
            style = (p.style.name or "").lower()

            m = PAGE_MARKER.match(text)
            if m:
                current_page = int(m.group(1))
                yield {"kind": "page", "number": current_page}
                continue

            if current_page in BAD_PAGES:
                continue

            if not text:
                continue

            # Heading styles
            if style.startswith("heading"):
                try:
                    level = int(style.replace("heading", "").strip())
                except ValueError:
                    level = 2
                yield {"kind": "heading", "level": level, "text": clean_text(text)}
                continue

            # Numbered pseudo-headings  ("3. Solution design")
            if re.match(r"^\d{1,2}\.\s+[A-Z]", text) and len(text) < 90:
                yield {"kind": "heading", "level": 1, "text": clean_text(text)}
                continue

            # Sub-headings like "Capabilities" or "Guardrails: ..." short caps lines
            if 2 <= len(text.split()) <= 8 and text.endswith((":", "")) and text[0].isupper():
                if text.endswith(":") or re.match(r"^[A-Z][A-Za-z ]+$", text):
                    yield {"kind": "heading", "level": 3, "text": clean_text(text)}
                    continue

            yield {"kind": "para", "text": clean_text(text)}

        elif tag == "tbl":
            if current_page in BAD_PAGES:
                continue
            t = Table(child, doc)
            rows = [[clean_text(c.text) for c in r.cells] for r in t.rows]
            rows = [r for r in rows if any(c for c in r)]
            if rows:
                yield {"kind": "table", "rows": rows}


# --------------------------------------------------------------------------- #
#  Split into 12 parts                                                         #
# --------------------------------------------------------------------------- #

PART_HEADING = re.compile(r"^(\d{1,2})\.\s+([A-Z][A-Za-z0-9 ,&/\-]+)$")

PART_TITLES = {
    1:  "Case study",
    2:  "Project brief",
    3:  "Solution design",
    4:  "Architecture",
    5:  "Workflow library",
    6:  "Feature matrix and automation inventory",
    7:  "Industry playbooks",
    8:  "Demos, ROI and QA",
    9:  "Demo build spec",
    10: "Website page",
    11: "SEO pack",
    12: "Sources",
}


def split_into_parts(blocks):
    parts = {n: {"n": n, "title": t, "blocks": []} for n, t in PART_TITLES.items()}
    current = None
    seen_part_heads = set()

    for b in blocks:
        if b["kind"] == "heading" and b["level"] == 1:
            m = PART_HEADING.match(b["text"])
            if m:
                n = int(m.group(1))
                if 1 <= n <= 12:
                    current = n
                    seen_part_heads.add(n)
                    # Don't emit the part heading as a block — it's the tab title
                    continue

        if current is None:
            continue
        parts[current]["blocks"].append(b)

    # Drop empty parts that never appeared
    return {n: p for n, p in parts.items() if p["blocks"] or n in seen_part_heads}


# --------------------------------------------------------------------------- #
#  Curated public-page sections (hand-written, source = docx part 10)         #
# --------------------------------------------------------------------------- #

def build_seo():
    return {
        "url": "https://clickmastersaiautomation.com/case-studies/ai-receptionist-lead-response-automation",
        "canonical": "https://clickmastersaiautomation.com/case-studies/ai-receptionist-lead-response-automation",
        "title": "AI Receptionist for Small Business | Clickmasters Case Study",
        "description": "How Clickmasters built an AI receptionist that answers calls, texts back missed calls, replies to emails and books jobs for trades. Call the demo line.",
        "h1": "AI Receptionist for Small Business: Every Call, Text and Email Answered in Seconds",
        "robots": "index, follow",
        "og": {
            "type": "article",
            "title": "We built an AI receptionist that answers every call, text and email in seconds",
            "description": "An AI phone agent, missed-call text-back and instant replies for trades businesses, tested on 40 scripted leads. See the build and call the demo line.",
            "image": "/images/case-studies/ai-receptionist-lead-response-automation/og-ai-receptionist-case-study.jpg",
            "imageWidth": 1200, "imageHeight": 630,
        },
        "twitter": {"card": "summary_large_image"},
        "keywords": [
            {"term": "ai receptionist for small business", "volume": 1600, "difficulty": 46, "role": "Primary"},
            {"term": "ai receptionist", "volume": 12100, "difficulty": 33, "role": "Head term"},
            {"term": "ai answering service", "volume": 2400, "difficulty": 37, "role": "Secondary"},
            {"term": "ai answering service for small business", "volume": 260, "difficulty": 32, "role": "Secondary"},
            {"term": "speed to lead", "volume": 880, "difficulty": 25, "role": "Secondary"},
            {"term": "missed call text back", "volume": 390, "difficulty": 30, "role": "Secondary"},
            {"term": "ai receptionist for plumbers", "volume": 40, "difficulty": 24, "role": "Long tail"},
            {"term": "ai receptionist for hvac", "volume": 30, "difficulty": 26, "role": "Long tail"},
            {"term": "ai receptionist for contractors", "volume": 20, "difficulty": 12, "role": "Long tail"},
        ],
        "internalLinks": [
            {"anchor": "AI voice agents", "href": "/services/ai-voice-agents"},
            {"anchor": "AI lead generation", "href": "/services/ai-lead-generation"},
            {"anchor": "AI chatbots", "href": "/services/ai-chatbots"},
            {"anchor": "AI voice agents for construction and trades", "href": "/solutions/ai-voice-agents/for-construction"},
            {"anchor": "lead generation automation for construction", "href": "/solutions/lead-generation-automation/for-construction"},
            {"anchor": "appointment booking automation", "href": "/solutions/appointment-booking-automation"},
            {"anchor": "free automation audit", "href": "/free-automation-audit"},
            {"anchor": "Call or text the demo line", "href": "/demos/ai-receptionist"},
        ],
    }


def build_hero():
    return {
        "eyebrow": "Case study · Demo build",
        "h1": "AI Receptionist for Small Business: Every Call, Text and Email Answered in Seconds",
        "intro": "Clickmasters built an AI receptionist and lead response system for trades and service businesses such as plumbers, electricians and HVAC contractors. It answers the phone when the owner cannot, texts back missed calls, replies to texts and emails within seconds, qualifies the job and books it into the calendar. Emergencies go straight to a person, and every lead lands in one record with the recording, the transcript and a summary.",
        "disclaimer": "This is a Clickmasters demo build. It is modelled on a public brief from a founder building lead response automation for small businesses, and tested with two fictional service businesses, an HVAC company and a plumber, and scripted leads.",
        "atAGlance": [
            {"label": "Project type", "value": "Demo build by Clickmasters, not a client engagement"},
            {"label": "Modelled on", "value": "A public brief for AI lead response automation for trades and service businesses, October 2026"},
            {"label": "Problem", "value": "Small businesses lose leads because nobody answers the call, text or email in time"},
            {"label": "Solution", "value": "AI phone agent, missed-call text-back, AI replies to texts, emails and web forms, booking, hand-off and follow-up"},
            {"label": "Core technology", "value": "Gemini 3.8 Live, Gemini 3.8 Flash, Pipecat, Twilio, Next.js, Supabase"},
            {"label": "Build", "value": "[15] working days, 2 developers"},
            {"label": "Headline result", "value": "First text reply in [ ] seconds; [ %] of test leads booked or handed to a person"},
        ],
        "primaryCta": {"label": "Call or text the demo line", "href": "/demos/ai-receptionist"},
        "secondaryCta": {"label": "Book a free automation audit", "href": "/free-automation-audit"},
    }


def build_challenge():
    return {
        "h2": "The challenge: the job goes to whoever answers first",
        "lead": "A plumber on a roof cannot answer the phone. An electrician under a house does not see the text. By the time they call back, the customer has rung the next name on the list.",
        "research": "A Harvard Business Review audit of 2,241 US companies found that 23% never responded to a web lead at all, and the rest took 42 hours on average. A companion study of 1.25 million leads found that firms that tried to make contact within an hour were nearly seven times as likely to qualify the lead as firms that waited one hour longer.",
        "h3WhyHard": {
            "h3": "Why speed to lead is hard for a small business",
            "bullets": [
                {"title": "The owner is the receptionist.", "body": "Whoever does the work also answers the phone, so jobs and enquiries compete for the same pair of hands."},
                {"title": "Three channels, no system.", "body": "Calls, texts and emails land in three places, and nobody sees the whole picture."},
                {"title": "A bad answer is worse than no answer.", "body": "An AI answering service that invents a price or books a job outside the service area costs more than a missed call."},
            ],
            "closing": "We built this demo against that brief, with two fictional service businesses and scripted test leads.",
        },
    }


def build_gaps():
    return {
        "h2": "What the brief left out: nine gaps we closed",
        "intro": "The brief described the goal: answer leads before they go elsewhere. A product that small businesses can trust with their phone line needs nine more things, and we added each one to the scope.",
        "rows": [
            {"gap": "No definition of a \"captured\" lead", "why": "Nobody can say whether the system works", "added": "Nine measures with pass thresholds, fixed before the build started"},
            {"gap": "No limits on what the AI may say", "why": "A model will happily invent a price or a promise", "added": "A business profile as the only source of answers, with rules enforced in code"},
            {"gap": "No hand-off or failure plan", "why": "Emergencies and upset callers need a person, and carriers and AI services fail", "added": "Live transfer and alerts for emergencies; voicemail and text-back if anything breaks"},
            {"gap": "No booking", "why": "A lead that is answered but not booked is lost a second time", "added": "Real calendar openings, a confirmation message, no double bookings"},
            {"gap": "No follow-up", "why": "Most leads do not decide in the first reply", "added": "Three timed nudges that stop on a reply, a booking or an opt-out"},
            {"gap": "No single record", "why": "The same person calls, then texts, then emails", "added": "One timeline per customer, matched by phone number and email address"},
            {"gap": "No carrier or consent rules", "why": "Texting rules differ by country and can block a launch for weeks", "added": "AI and recording disclosure on calls, opt-out on texts, sender registration planned per country"},
        ],
    }


def build_solution():
    return {
        "h2": "The solution: an AI receptionist that answers, qualifies and books on every channel",
        "steps": [
            {"n": 1, "title": "Answer the call.", "body": "The business keeps its number. The owner's phone rings first for 15 seconds, and if nobody picks up, the AI phone agent answers. It says it is an AI assistant, says the call is recorded and asks how it can help."},
            {"n": 2, "title": "Text back missed calls.", "body": "If a caller hangs up early or a call fails, a text goes out within seconds asking what they need. The conversation carries on by text."},
            {"n": 3, "title": "Reply to texts and emails.", "body": "An inbound text gets an AI reply in seconds, and an email gets one within two minutes, in the same thread. The AI asks one question at a time."},
            {"n": 4, "title": "Qualify the job.", "body": "On every channel the AI collects the same six details: name, contact number, the job, how urgent it is, the suburb and a preferred time. It answers only from the business profile: services, service area, hours and listed prices."},
            {"n": 5, "title": "Book it.", "body": "The AI offers two real openings from the calendar, books the one the customer picks and sends a confirmation."},
            {"n": 6, "title": "Hand off what it should not handle.", "body": "A burst pipe or a flooded kitchen triggers an immediate transfer to the on-call number, with a text alert that summarises the call. Anything outside the profile gets a promised callback and an alert to the owner."},
            {"n": 7, "title": "Follow up and record.", "body": "A lead who goes quiet gets three polite nudges over three days, which stop the moment they reply or opt out. Every call, text and email lands on one timeline per customer, with the recording, the transcript and a summary."},
        ],
        "rules": {
            "h3": "Rules the AI cannot break",
            "intro": "For texts and emails, code checks each reply against these rules before it is sent. On calls, bookings and transfers pass through the same checks, and every transcript is audited afterwards.",
            "bullets": [
                "It never states a price that is not in the business profile.",
                "It never books outside the service area or the opening hours.",
                "It says it is an AI at the start of every call and whenever it is asked.",
                "It stops messaging the moment someone replies STOP.",
            ],
        },
    }


def build_test_lab():
    return {
        "h3": "The Test Lab: proof before a customer calls",
        "intro": "Forty scripted leads, 15 calls, 12 texts, 8 emails and 5 web forms, cover routine jobs, emergencies, price shoppers, out-of-area requests, wrong numbers and spam. Each script has an expected outcome. A test run plays them all and reports the nine measures in the results table below.",
    }


def build_timeline():
    return {
        "h3": "What a handled lead looks like",
        "note": "Sample for layout only. Replace these rows with a real timeline from the demo before publishing.",
        "rows": [
            {"time": "10:02:11", "channel": "Call", "what": "Owner's phone rings for 15 seconds, no answer"},
            {"time": "10:02:27", "channel": "Call", "what": "AI agent answers, says it is an AI and that the call is recorded; caller reports a leaking tap"},
            {"time": "10:04:05", "channel": "Call", "what": "Visit booked for Thursday at 9:00; call ends"},
            {"time": "10:04:09", "channel": "Text", "what": "Confirmation sent to the caller; summary sent to the owner"},
        ],
    }


def build_stack():
    return {
        "h2": "Tech stack and open-source components",
        "intro": "The demo combines carrier and AI services with open-source parts, so the call flows, the data and the test method stay under the client's control.",
        "rows": [
            {"layer": "Number, calls and texts", "what": "Twilio Voice and Messaging", "why": "Rings the owner first, streams call audio to the AI, sends and receives texts"},
            {"layer": "AI phone agent", "what": "Gemini 3.8 Live", "why": "Speech-to-speech model with interruptions, 70 languages and tool calls for booking"},
            {"layer": "Voice pipeline", "what": "Pipecat", "why": "Open-source framework that connects phone audio to the voice model"},
            {"layer": "Text and email replies", "what": "Gemini 3.8 Flash", "why": "Every reply arrives as JSON: the message, the lead details and the next action"},
            {"layer": "Email in and out", "what": "Postmark", "why": "Delivers inbound email as a webhook and keeps replies in the same thread"},
            {"layer": "Booking", "what": "Cal.com", "why": "Open-source scheduling with real availability and no double bookings"},
            {"layer": "Web app", "what": "Next.js, shadcn/ui", "why": "Lead inbox, timelines, business profiles and dashboard"},
            {"layer": "Data, files, login", "what": "Supabase", "why": "Postgres, recordings storage and authentication in one open-source stack"},
            {"layer": "Timers and follow-ups", "what": "pg-boss", "why": "Job queue inside Postgres for text-backs and nudges"},
            {"layer": "Prompt testing", "what": "promptfoo", "why": "Catches regressions when a prompt or model changes"},
            {"layer": "Tracing and cost", "what": "Langfuse", "why": "Tokens, cost and latency recorded for every reply"},
        ],
    }


def build_results():
    return {
        "h2": "Results: how fast and how accurately the AI handled test leads",
        "intro": "We fixed the pass thresholds before writing any code, tuned the system on 20 practice leads, then measured it on [40] scripted leads it had never seen.",
        "note": "Every value below is a threshold, not a measured number yet. Replace the bracketed values with the real numbers from the Test Lab before publishing.",
        "rows": [
            {"n": 1, "measure": "First reply to a text", "how": "Reply sent time minus inbound received time, median", "target": "10 seconds or less"},
            {"n": 2, "measure": "Text-back after a missed call", "how": "Text sent time minus call end time, median", "target": "15 seconds or less"},
            {"n": 3, "measure": "First reply to an email", "how": "Median", "target": "2 minutes or less"},
            {"n": 4, "measure": "Voice response delay", "how": "End of caller speech to start of agent audio, median per call", "target": "1.5 seconds or less"},
            {"n": 5, "measure": "Lead details captured", "how": "Matched fields + expected fields", "target": "90% or more"},
            {"n": 6, "measure": "Bookings made", "how": "Booked + scenarios that should book; double bookings must be zero", "target": "85% or more"},
            {"n": 7, "measure": "Emergencies handed off", "how": "Emergency scenarios transferred or alerted within 30 seconds", "target": "100%"},
            {"n": 8, "measure": "Invented prices or promises", "how": "Guard breaches found in transcripts and messages", "target": "0"},
            {"n": 9, "measure": "Cost per lead", "how": "AI plus carrier cost per scenario, median", "target": "$0.30 or less"},
        ],
    }


def build_faq():
    return {
        "h2": "Frequently asked questions",
        "items": [
            {"q": "What is an AI receptionist?", "a": "An AI receptionist answers a business's calls, texts and emails automatically, in natural language. It answers questions from the business's own information, takes the caller's details, books appointments and passes urgent matters to a person."},
            {"q": "How fast should a small business respond to a new lead?", "a": "As fast as it can. Harvard Business Review research found that firms that tried to contact a web lead within an hour were nearly seven times as likely to qualify it as firms that waited one hour longer. This system replies to texts within seconds."},
            {"q": "What is missed-call text-back?", "a": "When a call goes unanswered or the caller hangs up, the system sends a text within seconds asking what they need. The conversation continues by text, so the lead is not lost to the next business on the list."},
            {"q": "Will callers know they are talking to an AI?", "a": "Yes. The agent says it is an AI assistant at the start of every call and whenever it is asked, and it says the call is recorded. A caller can ask for a person at any time."},
            {"q": "What happens when a caller has an emergency?", "a": "Each business sets its own emergency rules. When a caller describes one, the agent stops qualifying, transfers the call to the on-call number and sends an alert with a summary."},
            {"q": "How much does an AI phone agent cost per call?", "a": "By our estimate, a three-minute call costs roughly 15 to 20 US cents in AI and carrier fees on a US number at October 2026 rates. Texts and emails cost less. The measured figure from our test run is in the results table."},
            {"q": "Does it work with my existing phone number and calendar?", "a": "Yes. The business keeps its number and forwards unanswered calls to the AI, or moves the number across. The demo books into Cal.com, and Google Calendar or a job-management tool can be connected instead."},
            {"q": "Does an AI receptionist work outside the United States?", "a": "Calls work on local numbers in many countries. Texting rules differ: the US requires carrier registration, and New Zealand requires a dedicated short code that takes five to six weeks to set up. We plan the sender setup for each country before launch."},
        ],
    }


def build_cta():
    return {
        "h2": "Want every lead answered in seconds?",
        "body": "Book a free automation audit. We will map how calls, texts and emails reach your business today, show you where leads leak and estimate what an AI receptionist would cost per lead.",
        "primary": {"label": "Book a free automation audit", "href": "/free-automation-audit"},
        "secondary": {"label": "Talk to the team", "href": "/contact"},
        "related": "AI voice agents · AI lead generation · AI chatbots · AI voice agents for construction and trades",
    }


# --------------------------------------------------------------------------- #
#  TS emitter                                                                  #
# --------------------------------------------------------------------------- #

def to_ts(obj, indent=0):
    sp = "  " * indent
    if isinstance(obj, dict):
        if not obj:
            return "{}"
        items = []
        for k, v in obj.items():
            key = k if re.match(r"^[A-Za-z_$][A-Za-z0-9_$]*$", str(k)) else json.dumps(str(k))
            items.append(f"{sp}  {key}: {to_ts(v, indent + 1)}")
        return "{\n" + ",\n".join(items) + f"\n{sp}}}"
    if isinstance(obj, list):
        if not obj:
            return "[]"
        if all(isinstance(x, (str, int, float, bool)) or x is None for x in obj):
            return "[" + ", ".join(json.dumps(x) for x in obj) + "]"
        items = [f"{sp}  {to_ts(x, indent + 1)}" for x in obj]
        return "[\n" + ",\n".join(items) + f"\n{sp}]"
    if obj is None:
        return "null"
    if isinstance(obj, bool):
        return "true" if obj else "false"
    if isinstance(obj, (int, float)):
        return str(obj)
    return json.dumps(obj, ensure_ascii=False)


TS_HEADER = """// AUTO-GENERATED by scripts/build_case_study.py
// Do not edit by hand. Re-run the script after changing the source docx.

export type Block =
  | { kind: "page"; number: number }
  | { kind: "heading"; level: number; text: string }
  | { kind: "para"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "code"; code: string; language?: string; filename?: string }
  | { kind: "image"; src: string; alt: string; width: number; height: number; caption?: string }
  | { kind: "table"; rows: string[][] };

export type Part = {
  n: number;
  title: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  meta: {
    publishedAt: string;
    updatedAt: string;
    status: "draft" | "demo" | "live";
    readingMinutes: number;
  };
  seo: Record<string, unknown>;
  hero: Record<string, unknown>;
  challenge: Record<string, unknown>;
  gaps: Record<string, unknown>;
  solution: Record<string, unknown>;
  testLab: Record<string, unknown>;
  timeline: Record<string, unknown>;
  stack: Record<string, unknown>;
  results: Record<string, unknown>;
  faq: Record<string, unknown>;
  cta: Record<string, unknown>;
  parts: Part[];
};
"""


def emit_ts(slug: str, data: dict) -> str:
    return f"{TS_HEADER}\nexport const caseStudy: CaseStudy = {to_ts(data)};\n\nexport default caseStudy;\n"


# --------------------------------------------------------------------------- #
#  Build                                                                       #
# --------------------------------------------------------------------------- #

def build_one(docx_path: Path, slug: str) -> Path:
    print(f"\n> {docx_path.name}")
    blocks = list(extract_blocks(docx_path))
    print(f"    {len(blocks)} blocks extracted")

    parts_map = split_into_parts(blocks)
    parts_list = [parts_map[n] for n in sorted(parts_map)]
    print(f"    {len(parts_list)} parts:")
    for p in parts_list:
        tcount = sum(1 for b in p["blocks"] if b["kind"] == "table")
        print(f"      part {p['n']:>2} — {p['title']}  ({len(p['blocks'])} blocks, {tcount} tables)")

    data = {
        "slug": slug,
        "meta": {
            "publishedAt": "2026-10-05",
            "updatedAt": "2026-10-05",
            "status": "demo",
            "readingMinutes": 9,
        },
        "seo": build_seo(),
        "hero": build_hero(),
        "challenge": build_challenge(),
        "gaps": build_gaps(),
        "solution": build_solution(),
        "testLab": build_test_lab(),
        "timeline": build_timeline(),
        "stack": build_stack(),
        "results": build_results(),
        "faq": build_faq(),
        "cta": build_cta(),
        "parts": parts_list,
    }

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_file = OUT_DIR / f"{slug}.ts"
    out_file.write_text(emit_ts(slug, data), encoding="utf-8")
    print(f"    wrote {out_file.relative_to(PROJECT_ROOT)}  ({out_file.stat().st_size/1024:.1f} KB)")
    return out_file


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="Override slug (single-docx mode only)")
    ap.add_argument("--only", help="Process only the named docx in ./doc")
    args = ap.parse_args()

    if not DOC_DIR.exists():
        print(f"Folder not found: {DOC_DIR}\nCreate it and drop your .docx files in.", file=sys.stderr)
        sys.exit(1)

    files = sorted(p for p in DOC_DIR.glob("*.docx") if not p.name.startswith("~$"))
    if args.only:
        files = [p for p in files if p.name == args.only]

    if not files:
        print(f"No .docx files found in {DOC_DIR}")
        sys.exit(0)

    if args.slug and len(files) != 1:
        print("--slug requires exactly one docx (use --only)", file=sys.stderr)
        sys.exit(1)

    print(f"Scanning {DOC_DIR} ...")
    print(f"Found {len(files)} docx file(s)")

    for f in files:
        slug = args.slug or slugify(f.name)
        build_one(f, slug)

    print(f"\nDone. Wrote to {OUT_DIR.relative_to(PROJECT_ROOT)}")


if __name__ == "__main__":
    main()