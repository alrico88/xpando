import { unshorten } from '@/app/(unshortener)/unshorten';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge'; // 'nodejs' is the default

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const site = searchParams.get('site');

  if (!site) {
    return NextResponse.json(
      {
        error: 'Missing site query parameter',
      },
      {
        status: 400,
      },
    );
  }

  try {
    const { redirected, status, url } = await unshorten(site);

    return NextResponse.json(
      {
        url,
        redirected,
        status,
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
      },
      {
        status: 500,
      },
    );
  }
}
