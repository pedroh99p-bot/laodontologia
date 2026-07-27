import { siteConfig } from "../config/site";

export const professionals = siteConfig.professionals;

export type ProfessionalProfile = {
  slug: string;
  mediaKey: "lucasPortrait" | "amandaPortrait";
  specialty: string | null;
  biography: string | null;
  missing: readonly string[];
};

// Os perfis ficam parciais até especialidades e biografias serem aprovadas.
export const professionalProfiles: readonly ProfessionalProfile[] = [
  {
    slug: "lucas-ferreira",
    mediaKey: "lucasPortrait",
    specialty: null,
    biography: null,
    missing: [
      "Especialidade confirmada.",
      "Biografia aprovada.",
      "Formação e diferenciais comprovados.",
    ],
  },
  {
    slug: "amanda-perestelo",
    mediaKey: "amandaPortrait",
    specialty: null,
    biography: null,
    missing: [
      "Especialidade confirmada.",
      "Biografia aprovada.",
      "Formação e diferenciais comprovados.",
    ],
  },
];
