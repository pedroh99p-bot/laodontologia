export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  reviewedBy: string;
};

export const faqStatus = "pending" as const;
export const faqPublicationRequirements = [
  "Perguntas reais priorizadas pela clínica.",
  "Respostas operacionais aprovadas.",
  "Revisão clínica quando aplicável.",
] as const;

// Perguntas e respostas aguardam validação operacional e clínica.
export const faq: readonly FaqItem[] = [];
