// app/api/erp-revalidate/route.ts
// Called by the ERP right after a created or edited page is published,
// unpublished or deleted, so the change shows on the next page load instead of after the
// cache (EDITS_REVALIDATE_SECONDS / page ISR) runs out.
//   POST /api/erp-revalidate   { "path": "/services/x" }
//   Header: Authorization: Bearer <ERP_REVALIDATE_SECRET>
import { timingSafeEqual } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import { normalizeEditPath } from '@/lib/erp-edits-shared';

const noStore = { 'Cache-Control': 'no-store' };

const authorized = (request: NextRequest) => {
  const secret = process.env.ERP_REVALIDATE_SECRET;
  if (!secret) return false;
  const given = Buffer.from(request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ?? '');
  const expected = Buffer.from(secret);
  return given.length === expected.length && timingSafeEqual(given, expected);
};

export async function POST(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401, headers: noStore });
  }
  let path = '/';
  try {
    const body = (await request.json()) as { path?: unknown };
    if (typeof body.path === 'string' && body.path.length <= 1024) path = body.path;
  } catch {
    // no body: refresh the edit caches only
  }
  // Expire now (not stale-while-revalidate): the next request refetches.
  // Both ERP modules: Page Editing (edits) and Page Creation (lib/cms.ts).
  revalidateTag('erp-edited-pages', { expire: 0 });
  revalidateTag('cms-page', { expire: 0 });
  // Page HTML (SEO metadata from withEditedPageSeo) is cached by ISR too.
  const slug = normalizeEditPath(path);
  if (/^\/[a-z0-9\-._~%/]*$/i.test(slug)) revalidatePath(slug);
  return NextResponse.json({ ok: true, path: slug }, { headers: noStore });
}
