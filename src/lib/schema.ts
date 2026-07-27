import { siteConfig } from "../config/site";

export type DentistSchemaOptions = {
  siteUrl: string;
  imageUrl?: string;
  mapUrl?: string;
  postalCode?: string;
};

export const buildDentistSchema = ({
  siteUrl,
  imageUrl,
  mapUrl,
  postalCode,
}: DentistSchemaOptions) => ({
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl.replace(/\/+$/, "")}/#organization`,
  name: siteConfig.brandName,
  url: siteUrl,
  telephone: siteConfig.phoneE164,
  sameAs: [siteConfig.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetLine,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: "BR",
    ...(postalCode ? { postalCode } : {}),
  },
  ...(imageUrl ? { image: imageUrl } : {}),
  ...(mapUrl ? { hasMap: mapUrl } : {}),
});
