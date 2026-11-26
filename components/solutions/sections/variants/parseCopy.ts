/**
 * Section copy arrives as one multi-line string per section. Split it into its real lines
 * (paragraphs / list items) so each "**Title**description" item is parsed on its own.
 * Strips list markers ("- ") and drops blank lines.
 */
export function toLines(content: unknown[] | undefined): string[] {
  return (content || [])
    .filter((c): c is string => typeof c === 'string')
    .flatMap((c) => c.split(/\r?\n/))
    .map((l) => l.replace(/^\s*[-•]\s+/, '').trim())
    .filter(Boolean);
}

function splitSentences(text: string) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * "**Title.** description" or "**Title**description" → { title, description }.
 * Falls back to first sentence as the title. Description keeps inline markup (links/bold).
 */
export function splitTitled(line: string) {
  const bold = line.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
  if (bold) return { title: bold[1].replace(/[.:]\s*$/, '').trim(), description: bold[2].trim() };
  const m = line.match(/^(.+?[.!?])\s+([\s\S]*)$/);
  if (m) return { title: m[1].replace(/[.]\s*$/, '').trim(), description: m[2].trim() };
  return { title: line.trim(), description: '' };
}

export function splitBoldItem(line: string) {
  const marked = line.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
  if (marked) {
    return { title: marked[1].trim(), description: marked[2].trim() };
  }
  const clean = line.replace(/\*\*/g, "").trim();
  const dashed = clean.split(/\s+[—–]\s+/);
  if (dashed.length > 1) {
    return { title: dashed[0].trim(), description: dashed.slice(1).join(" — ").trim() };
  }
  return { title: clean, description: "" };
}

export function splitBoundaries(paragraphs: string[]) {
  const isNot: string[] = [];
  const is: string[] = [];

  for (const paragraph of paragraphs) {
    for (const sentence of splitSentences(paragraph)) {
      const whatItIs = sentence.match(/^what it is:\s*(.*)$/i);
      if (whatItIs) {
        if (whatItIs[1]) is.push(whatItIs[1]);
        continue;
      }
      if (/\b(not about|it's not|it is not|not a |not an )\b/i.test(sentence)) {
        isNot.push(sentence);
        continue;
      }
      if (is.length > 0) is.push(sentence);
    }
  }

  return {
    is: is.filter(Boolean),
    isNot: isNot.filter(Boolean),
  };
}
