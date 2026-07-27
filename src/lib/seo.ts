export type SeoInput = {
  title: string;
  description: string;
  path?: string;
  siteUrl?: string;
  imageUrl?: string;
  noindex?: boolean;
};

export type ResolvedSeo = SeoInput & {
  canonicalUrl?: string;
};

export const resolveSeo = (input: SeoInput): ResolvedSeo => {
  const siteUrl = input.siteUrl?.replace(/\/+$/, "");
  const path = input.path?.startsWith("/")
    ? input.path
    : `/${input.path ?? ""}`;
  const canonicalUrl = siteUrl
    ? new URL(path, `${siteUrl}/`).toString()
    : undefined;

  return {
    ...input,
    ...(canonicalUrl ? { canonicalUrl } : {}),
  };
};
