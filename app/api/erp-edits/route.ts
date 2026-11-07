// app/api/erp-edits/route.ts
// Same-origin proxy for the ERP edited-pages API, so the browser never needs
// CMS_API_URL (server-only, may be http://localhost in dev, and the CSP only
// allows https: connections). Always 200 with an empty result when there is
// nothing to apply, so the console never shows a 404.
//   GET /api/erp-edits              -> { paths: string[] }
//   GET /api/erp-edits?path=/a/b    -> { edits: ErpEdit[] }
import { NextResponse, type NextRequest } from 'next/server';
import { EDITS_REVALIDATE_SECONDS, getEditedPage, getEditedPaths } from '@/lib/erp-edits';

const headers = {
  'Cache-Control': `public, max-age=0, s-maxage=${EDITS_REVALIDATE_SECONDS}, stale-while-revalidate=${EDITS_REVALIDATE_SECONDS}`,
};

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  if (path === null) {
    return NextResponse.json({ paths: await getEditedPaths() }, { headers });
  }
  if (path.length > 1024) {
    return NextResponse.json({ edits: [] }, { headers });
  }
  const page = await getEditedPage(path);
  return NextResponse.json({ edits: page?.edits ?? [] }, { headers });
}
