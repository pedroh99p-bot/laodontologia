import type { media } from "../config/media";

export type ResultMediaKey = Extract<
  keyof typeof media,
  | "result01"
  | "result02"
  | "result03"
  | "result04"
  | "result05"
  | "result06"
  | "result07"
>;

export type ClinicalResult = {
  slug: string;
  label: string;
  mediaKey: ResultMediaKey;
  context: string;
};

export const resultsStatus = "partial" as const;

export const results: readonly ClinicalResult[] = [
  {
    slug: "resultado-01",
    label: "Resultado 01",
    mediaKey: "result01",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
  {
    slug: "resultado-02",
    label: "Resultado 02",
    mediaKey: "result02",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
  {
    slug: "resultado-03",
    label: "Resultado 03",
    mediaKey: "result03",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
  {
    slug: "resultado-04",
    label: "Resultado 04",
    mediaKey: "result04",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
  {
    slug: "resultado-05",
    label: "Resultado 05",
    mediaKey: "result05",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
  {
    slug: "resultado-06",
    label: "Resultado 06",
    mediaKey: "result06",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
  {
    slug: "resultado-07",
    label: "Resultado 07",
    mediaKey: "result07",
    context: "Comparativo fornecido pela equipe da LA Odontologia.",
  },
] as const;

export const resultPublicationRequirements = [
  "Contexto clínico aprovado para cada comparativo.",
  "Consentimento e direito de uso arquivados pela clínica.",
  "Validação clínica e ética antes da publicação definitiva.",
] as const;
