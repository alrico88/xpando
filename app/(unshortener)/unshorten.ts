export async function unshorten(site: string): Promise<{
  url: string;
  redirected: boolean;
  status: number;
}> {
  const res = await fetch(site, {
    redirect: 'manual',
  });

  const redirectCodes = [301, 307, 308];

  const isRedirect = redirectCodes.includes(res.status);

  return {
    url: isRedirect ? (res.headers.get('location') as string) : res.url,
    redirected: isRedirect,
    status: res.status,
  };
}
