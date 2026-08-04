import type { AnalyticsEventName } from "../config/analytics";

export type CtaLocation =
  | "header"
  | "hero"
  | "section"
  | "needs"
  | "floating_assistant"
  | "location"
  | "final"
  | "footer"
  | "thank_you";

export type AnalyticsEventParameters = {
  page_path?: string;
  cta_location?: CtaLocation;
  treatment?: string;
  professional?: string;
  campaign?: string;
  source?: string;
  medium?: string;
};

type AnalyticsPayload = AnalyticsEventParameters & {
  event: AnalyticsEventName;
};

type DataLayerWindow = Window & {
  dataLayer?: AnalyticsPayload[];
};

export const trackEvent = (
  event: AnalyticsEventName,
  parameters: AnalyticsEventParameters = {},
): void => {
  if (typeof window === "undefined") {
    return;
  }

  const payload: AnalyticsPayload = {
    event,
    page_path: window.location.pathname,
    ...parameters,
  };

  (window as DataLayerWindow).dataLayer?.push(payload);
  window.dispatchEvent(
    new CustomEvent<AnalyticsPayload>("la:analytics", { detail: payload }),
  );
};
