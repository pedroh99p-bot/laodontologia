export const analyticsEventNames = [
  "whatsapp_click",
  "phone_click",
  "route_click",
  "form_start",
  "form_submit",
  "generate_lead",
  "treatment_view",
  "professional_view",
  "result_interaction",
  "faq_open",
] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];

export const analyticsConfig = {
  gtmId: import.meta.env.PUBLIC_GTM_ID?.trim() || undefined,
  ga4Id: import.meta.env.PUBLIC_GA4_ID?.trim() || undefined,
  googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID?.trim() || undefined,
  googleAdsConversionLabel:
    import.meta.env.PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim() || undefined,
  enabled: false,
} as const;
