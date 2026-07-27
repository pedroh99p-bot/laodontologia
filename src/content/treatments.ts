export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  reviewedBy: string;
  confirmed: true;
};

export const treatmentsStatus = "pending" as const;
export const treatmentPublicationRequirements = [
  "Nome do tratamento confirmado.",
  "Descrição e indicação aprovadas.",
  "Responsável pela revisão clínica identificado.",
] as const;

// Intencionalmente vazio até a clínica confirmar os tratamentos oferecidos.
export const treatments: readonly Treatment[] = [];
