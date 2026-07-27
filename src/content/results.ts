export type ClinicalResult = {
  slug: string;
  title: string;
  treatmentSlug: string;
  beforeMediaKey: string;
  afterMediaKey: string;
  consentReference: string;
  reviewedBy: string;
};

export const resultsStatus = "pending" as const;
export const resultPublicationRequirements = [
  "Caso clínico real e contextualizado.",
  "Consentimento documentado.",
  "Validação clínica e ética.",
  "Mídia padronizada e aprovada.",
] as const;

// Casos só podem entrar após validação clínica, origem e consentimento.
export const results: readonly ClinicalResult[] = [];
