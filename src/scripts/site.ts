import {
  analyticsEventNames,
  type AnalyticsEventName,
} from "../config/analytics";
import {
  trackEvent,
  type AnalyticsEventParameters,
  type CtaLocation,
} from "../lib/analytics";

const validEvents = new Set<string>(analyticsEventNames);
const validCtaLocations = new Set<CtaLocation>([
  "header",
  "hero",
  "section",
  "location",
  "final",
  "footer",
  "thank_you",
]);

const isAnalyticsEvent = (value: string): value is AnalyticsEventName =>
  validEvents.has(value);

const isCtaLocation = (value: string): value is CtaLocation =>
  validCtaLocations.has(value as CtaLocation);

const eventParametersFromElement = (
  element: HTMLElement,
): AnalyticsEventParameters => {
  const parameters: AnalyticsEventParameters = {};
  const ctaLocation = element.dataset.ctaLocation;
  const professional = element.dataset.professional;

  if (ctaLocation && isCtaLocation(ctaLocation)) {
    parameters.cta_location = ctaLocation;
  }

  if (professional) {
    parameters.professional = professional;
  }

  return parameters;
};

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const trackedElement = target.closest<HTMLElement>("[data-track-event]");
  const eventName = trackedElement?.dataset.trackEvent;

  if (!trackedElement || !eventName || !isAnalyticsEvent(eventName)) {
    return;
  }

  trackEvent(eventName, eventParametersFromElement(trackedElement));
});

document
  .querySelectorAll<HTMLDetailsElement>("[data-mobile-menu]")
  .forEach((menu) => {
    const summary = menu.querySelector<HTMLElement>("summary");

    menu.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !menu.open) {
        return;
      }

      menu.open = false;
      summary?.focus();
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.open = false;
      });
    });
  });

const viewTargets = document.querySelectorAll<HTMLElement>("[data-track-view]");

if ("IntersectionObserver" in window && viewTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target as HTMLElement;
        const eventName = element.dataset.trackView;

        if (eventName && isAnalyticsEvent(eventName)) {
          trackEvent(eventName, eventParametersFromElement(element));
        }

        observer.unobserve(element);
      });
    },
    { threshold: 0.55 },
  );

  viewTargets.forEach((element) => observer.observe(element));
}
