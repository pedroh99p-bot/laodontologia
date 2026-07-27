export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  source: string;
  consentReference: string;
};

export const testimonialsStatus = "pending" as const;
export const testimonialPublicationRequirements = [
  "Depoimento real e verificável.",
  "Origem registrada.",
  "Consentimento para publicação.",
  "Atribuição aprovada.",
] as const;

// Não usar o depoimento fictício presente nas referências.
export const testimonials: readonly Testimonial[] = [];
