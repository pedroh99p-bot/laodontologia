import type { ContentStatus } from "../content/home";
import { homeCopy } from "../content/home";

export type HomeSectionKey =
  | "navbar"
  | "hero"
  | "trust"
  | "needs"
  | "results"
  | "professionals"
  | "treatments"
  | "process"
  | "clinic"
  | "differentials"
  | "testimonials"
  | "location"
  | "faq"
  | "finalCta"
  | "footer";

export type HomeSectionConfiguration = {
  id: string;
  status: ContentStatus;
  enabled: boolean;
  implementation: "live" | "prepared";
};

const configuredSection = (
  id: string,
  status: ContentStatus,
): HomeSectionConfiguration => ({
  id,
  status,
  enabled: status !== "pending",
  implementation: status === "pending" ? "prepared" : "live",
});

export const homeSections = {
  navbar: configuredSection("topo", "ready"),
  hero: configuredSection("inicio", homeCopy.hero.status),
  trust: configuredSection("confianca", homeCopy.trust.status),
  needs: configuredSection("necessidades", homeCopy.needs.status),
  results: configuredSection("resultados", homeCopy.results.status),
  professionals: configuredSection(
    "profissionais",
    homeCopy.professionals.status,
  ),
  treatments: configuredSection("tratamentos", homeCopy.treatments.status),
  process: configuredSection("processo", homeCopy.process.status),
  clinic: configuredSection("clinica", homeCopy.clinic.status),
  differentials: configuredSection(
    "diferenciais",
    homeCopy.differentials.status,
  ),
  testimonials: configuredSection("depoimentos", homeCopy.testimonials.status),
  location: configuredSection("localizacao", homeCopy.location.status),
  faq: configuredSection("perguntas", homeCopy.faq.status),
  finalCta: configuredSection("contato", homeCopy.finalCta.status),
  footer: configuredSection("rodape", homeCopy.footer.status),
} as const satisfies Record<HomeSectionKey, HomeSectionConfiguration>;
