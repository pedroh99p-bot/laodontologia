/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?: string;
  readonly PUBLIC_GOOGLE_PLACE_ID?: string;
  readonly PUBLIC_GOOGLE_MAPS_EMBED_URL?: string;
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME?: string;
  readonly PUBLIC_LEAD_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
