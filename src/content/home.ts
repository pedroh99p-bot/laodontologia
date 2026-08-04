import { siteConfig } from "../config/site";

export type ContentStatus = "ready" | "partial" | "pending";

type CallToAction = {
  label: string;
  href: string;
};

type HomeSectionCopy = {
  status: ContentStatus;
  eyebrow: string | null;
  heading: string | null;
  body: string | null;
  primaryCta: CallToAction | null;
  secondaryCta: CallToAction | null;
  missing: readonly string[];
};

const whatsappHref = siteConfig.whatsappUrl;

export const homeTrustItems = [
  {
    label: "Localização",
    value: siteConfig.address.neighborhood,
  },
  {
    label: "Profissional",
    value: `${siteConfig.professionals[0].displayName} · ${siteConfig.professionals[0].cro}`,
  },
  {
    label: "Profissional",
    value: `${siteConfig.professionals[1].displayName} · ${siteConfig.professionals[1].cro}`,
  },
  {
    label: "Contato",
    value: "Direto pelo WhatsApp",
  },
] as const;

export const homeCopy = {
  hero: {
    status: "ready",
    eyebrow: "Odontologia no Recreio dos Bandeirantes",
    heading: "Odontologia no Recreio, com cuidado em cada detalhe.",
    body: "Na LA Odontologia, cada atendimento começa com atenção ao que você precisa. Fale com a equipe e dê o primeiro passo para cuidar do seu sorriso.",
    primaryCta: {
      label: "Falar pelo WhatsApp",
      href: whatsappHref,
    },
    secondaryCta: {
      label: "Conhecer os profissionais",
      href: "#profissionais",
    },
    missing: [],
  },
  trust: {
    status: "ready",
    eyebrow: null,
    heading: "Informações confirmadas",
    body: "Atendimento no Recreio dos Bandeirantes com Dr. Lucas Ferreira, CRO 43440, e Dra. Amanda Perestelo, CRO 42823.",
    primaryCta: null,
    secondaryCta: null,
    missing: [],
  },
  needs: {
    status: "partial",
    eyebrow: "Seu cuidado começa pela escuta",
    heading: "O que você gostaria de cuidar no seu sorriso?",
    body: "Uma avaliação ajuda a entender suas necessidades e a conversar sobre os próximos passos com mais clareza.",
    primaryCta: {
      label: "Conversar com a equipe",
      href: whatsappHref,
    },
    secondaryCta: null,
    missing: ["Necessidades e tratamentos que a clínica deseja destacar."],
  },
  results: {
    status: "partial",
    eyebrow: "Resultados",
    heading: "Resultados que respeitam cada sorriso.",
    body: "Comparativos fornecidos pela equipe da LA Odontologia. Cada resultado é individual e depende de avaliação profissional.",
    primaryCta: null,
    secondaryCta: null,
    missing: [
      "Consentimento documentado.",
      "Tratamento e contexto de cada caso.",
      "Validação clínica e ética.",
    ],
  },
  professionals: {
    status: "partial",
    eyebrow: "Quem cuida do seu sorriso",
    heading: "Os Especialistas",
    body: "Dr. Lucas Ferreira, CRO 43440, e Dra. Amanda Perestelo, CRO 42823.",
    primaryCta: {
      label: "Falar com a equipe",
      href: whatsappHref,
    },
    secondaryCta: null,
    missing: [
      "Especialidade confirmada de cada profissional.",
      "Biografias aprovadas.",
      "Formação e diferenciais profissionais comprovados.",
    ],
  },
  treatments: {
    status: "partial",
    eyebrow: "Tratamentos",
    heading: "Cuidados pensados para diferentes necessidades.",
    body: null,
    primaryCta: null,
    secondaryCta: null,
    missing: [
      "Lista de tratamentos oferecidos.",
      "Descrição e indicação de cada tratamento.",
      "Responsável pela revisão clínica.",
    ],
  },
  process: {
    status: "partial",
    eyebrow: "Como funciona",
    heading: "Entenda os próximos passos.",
    body: null,
    primaryCta: null,
    secondaryCta: null,
    missing: [
      "Fluxo real entre primeiro contato, avaliação e acompanhamento.",
      "Orientações operacionais aprovadas pela clínica.",
    ],
  },
  clinic: {
    status: "partial",
    eyebrow: "A clínica",
    heading: "Conheça o espaço da LA Odontologia.",
    body: null,
    primaryCta: null,
    secondaryCta: null,
    missing: [
      "Descrição factual do ambiente e da estrutura.",
      "Fotografias reais da clínica.",
    ],
  },
  differentials: {
    status: "partial",
    eyebrow: "Diferenciais",
    heading: "O que orienta a experiência na LA Odontologia.",
    body: null,
    primaryCta: null,
    secondaryCta: null,
    missing: [
      "Diferenciais reais e comprováveis.",
      "Tecnologias, recursos ou protocolos autorizados para divulgação.",
    ],
  },
  testimonials: {
    status: "pending",
    eyebrow: "Depoimentos",
    heading: "Experiências de quem passou pela clínica.",
    body: null,
    primaryCta: null,
    secondaryCta: null,
    missing: [
      "Depoimentos reais.",
      "Origem e consentimento para publicação.",
      "Forma de atribuição aprovada.",
    ],
  },
  location: {
    status: "ready",
    eyebrow: "Localização",
    heading: "LA Odontologia no Recreio dos Bandeirantes.",
    body: "Avenida das Américas, 13685, Sala 278, A4 Offices, Recreio dos Bandeirantes, Rio de Janeiro - RJ.",
    primaryCta: {
      label: "Falar pelo WhatsApp",
      href: whatsappHref,
    },
    secondaryCta: null,
    missing: [],
  },
  faq: {
    status: "ready",
    eyebrow: "Perguntas frequentes",
    heading: "Dúvidas antes de falar com a equipe?",
    body: "Respostas objetivas para começar a conversa com a equipe.",
    primaryCta: {
      label: "Falar pelo WhatsApp",
      href: whatsappHref,
    },
    secondaryCta: null,
    missing: [],
  },
  finalCta: {
    status: "ready",
    eyebrow: "Próximo passo",
    heading: "Quer conversar sobre o cuidado com o seu sorriso?",
    body: "Envie uma mensagem para a LA Odontologia e fale diretamente com a equipe.",
    primaryCta: {
      label: "Chamar no WhatsApp",
      href: whatsappHref,
    },
    secondaryCta: null,
    missing: [],
  },
  footer: {
    status: "ready",
    eyebrow: null,
    heading: "LA Odontologia",
    body: "Avenida das Américas, 13685, Sala 278, A4 Offices, Recreio dos Bandeirantes, Rio de Janeiro - RJ. Telefone e WhatsApp: (21) 97188-2312.",
    primaryCta: null,
    secondaryCta: null,
    missing: [],
  },
} as const satisfies Record<string, HomeSectionCopy>;
