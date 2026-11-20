'use client';

// Glass-style lead form used on product pages (hero + mid-page).
// Visual style follows the case-study hero form (app/case-studies/[slug]/page.tsx):
// eyebrow labels, transparent rounded inputs, brand submit button — adapted to the light product theme.
// Posts to the same CRM endpoint and payload shape as the contact page (components/contact/pageContact.tsx).

import { useId, useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const CRM_ENDPOINT = 'https://crm.clickmasters.pk/api/leads';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ProductLeadForm({
  product,
  variant = 'section',
  id,
}: {
  product: string;
  /** 'hero' = compact card beside the H1; 'section' = mid-page card with brand glow. */
  variant?: 'hero' | 'section';
  /** Optional anchor id for the wrapper. */
  id?: string;
}) {
  const uid = useId();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const hero = variant === 'hero';

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please add your name, work email and phone number.');
      return;
    }
    setStatus('sending');
    const params = new URLSearchParams(window.location.search);
    try {
      const res = await fetch(CRM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: `[${product}] ${form.message.trim() || 'Requested a free audit from the product page.'}`,
          website: 'clickmastersaiautomation.com',
          service: 'Automation',
          landingPage: window.location.href,
          referrer: document.referrer || '',
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
          utm_term: params.get('utm_term') || '',
          utm_content: params.get('utm_content') || '',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setError('Something went wrong sending your request. Please try again or use the contact page.');
    }
  };

  const label = 'eyebrow text-muted-foreground block mb-2 text-[11px]';
  const field =
    'w-full bg-white/30 border border-ink/15 rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-brand focus:bg-white/60 focus:outline-none transition-colors';

  return (
    <div id={id} className={`relative scroll-mt-28 ${hero ? 'w-full md:max-w-xl' : 'mt-10'}`}>
      {/* soft brand glow behind the glass */}
      <div
        aria-hidden="true"
        className={`absolute -z-10 rounded-4xl blur-2xl bg-linear-to-br from-brand/25 via-brand/5 to-transparent ${
          hero ? '-inset-4' : '-inset-6'
        }`}
      />
      <div className="relative rounded-2xl border border-white/70 bg-white/40 backdrop-blur-xl shadow-xl shadow-black/5 p-6 md:p-8">
        <div className="mb-6">
          <p className="eyebrow text-[11px] text-brand mb-2">Free audit</p>
          <h2 className={`display leading-tight text-ink ${hero ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
            {hero ? (
              <>
                Get your free <span className="display-italic text-brand">automation audit</span>
              </>
            ) : (
              <>
                See what {product} could <span className="display-italic text-brand">do for you</span>
              </>
            )}
          </h2>
          <p className="mt-1 text-xs md:text-sm text-muted-foreground">
            {hero
              ? 'No pitch. We reply with the steps worth automating first.'
              : 'Tell us about your process. We reply with which steps are worth automating first. No obligation.'}
          </p>
        </div>

        {status === 'sent' ? (
          <div className="flex items-start gap-3 rounded-lg border border-brand/30 bg-brand/10 p-4" role="status">
            <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
            <p className="text-sm text-ink">Thank you. Your request is in, and our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${uid}-name`} className={label}>Name</label>
                  <input id={`${uid}-name`} name="name" className={field} placeholder="Jane Doe" autoComplete="name" value={form.name} onChange={update('name')} required />
                </div>
                <div>
                  <label htmlFor={`${uid}-email`} className={label}>Work email</label>
                  <input id={`${uid}-email`} name="email" type="email" className={field} placeholder="jane@company.com" autoComplete="email" value={form.email} onChange={update('email')} required />
                </div>
              </div>
              <div>
                <label htmlFor={`${uid}-phone`} className={label}>Phone</label>
                <input id={`${uid}-phone`} name="phone" type="tel" className={field} placeholder="+1 555 000 0000" autoComplete="tel" value={form.phone} onChange={update('phone')} required />
              </div>
              <div>
                <label htmlFor={`${uid}-msg`} className={label}>What are you trying to fix?</label>
                <textarea
                  id={`${uid}-msg`}
                  name="message"
                  rows={hero ? 2 : 3}
                  className={`${field} resize-none`}
                  placeholder="Slow follow-up, manual entry... (optional)"
                  value={form.message}
                  onChange={update('message')}
                />
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-brand" role="alert">{error}</p>}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand text-white text-sm px-6 py-3.5 rounded-lg hover:bg-ink disabled:opacity-60 transition-colors"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Book my free audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="mt-4 text-[11px] text-center text-muted-foreground/80">
              We use your details only to reply to this request.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
