// app/api/erp-edits/route.ts
// Same-origin proxy for the ERP edited-pages API, so the browser never needs
// CMS_API_URL (server-only, may be http://localhost in dev, and the CSP only
// allows https: connections). Always 200 with an empty result when there is
// nothing to apply, so the console never shows a 404.
//   GET /api/erp-edits              -> { paths: string[] }
//   GET /api/erp-edits?path=/a/b    -> { edits: ErpEdit[] }
import { NextResponse, type NextRequest } from 'next/server';
import { getEditedPage, getEditedPaths } from '@/lib/erp-edits';

// Never cached (not here, not on the server, not in the browser): every page
// view gets the edits as currently published in the ERP.
export const dynamic = 'force-dynamic';
const headers = {
  'Cache-Control': 'no-store, max-age=0',
  // Also tell any CDN in front of the site (Vercel, Cloudflare) not to cache.
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
};

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  if (path === null) {
    return NextResponse.json({ paths: await getEditedPaths({ fresh: true }) }, { headers });
  }
  if (path.length > 1024) {
    return NextResponse.json({ edits: [] }, { headers });
  }
  const page = await getEditedPage(path, { fresh: true });
  return NextResponse.json({ edits: page?.edits ?? [] }, { headers });
}
