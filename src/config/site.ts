import { analyticsEventNames } from "./analytics";
import { primaryNavigation } from "./navigation";

export type Professional = {
  slug: string;
  name: string;
  displayName: string;
  cro: string;
  specialty?: string;
  biography?: string;
};

export type ClinicAddress = {
  street: string;
  number: string;
  room: string;
  building: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  streetLine: string;
  formatted: string;
  postalCode?: string;
};

export type SiteConfig = {
  brandName: string;
  existingTagline: string;
  phoneDisplay: string;
  phoneE164: string;
  telephoneHref: string;
  whatsappNumber: string;
  whatsappUrl: string;
  instagramUsername: string;
  instagramUrl: string;
  address: ClinicAddress;
  professionals: readonly Professional[];
  navigation: typeof primaryNavigation;
  defaultSeo: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    siteUrl?: string;
  };
  conversionEventNames: typeof analyticsEventNames;
};

const publicSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim() || undefined;

export const siteConfig = {
  brandName: "LA Odontologia",
  existingTagline: "Lugar onde se constroem sorrisos",
  phoneDisplay: "(21) 97188-2312",
  phoneE164: "+5521971882312",
  telephoneHref: "tel:+5521971882312",
  whatsappNumber: "5521971882312",
  whatsappUrl: "https://wa.me/5521971882312",
  instagramUsername: "la.odontologia_",
  instagramUrl: "https://www.instagram.com/la.odontologia_/",
  address: {
    street: "Avenida das Américas",
    number: "13685",
    room: "Sala 278",
    building: "A4 Offices",
    neighborhood: "Recreio dos Bandeirantes",
    city: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil",
    streetLine: "Avenida das Américas, 13685, Sala 278",
    formatted:
      "Avenida das Américas, 13685, Sala 278, A4 Offices, Recreio dos Bandeirantes, Rio de Janeiro - RJ",
  },
  professionals: [
    {
      slug: "lucas-ferreira",
      name: "Lucas Ferreira",
      displayName: "Dr. Lucas Ferreira",
      cro: "CRO 43440",
    },
    {
      slug: "amanda-perestelo",
      name: "Amanda Perestelo",
      displayName: "Dra. Amanda Perestelo",
      cro: "CRO 42823",
    },
  ],
  navigation: primaryNavigation,
  defaultSeo: {
    title: "LA Odontologia | Dentista no Recreio, Rio de Janeiro",
    description:
      "Conheça a LA Odontologia no Recreio dos Bandeirantes, na Avenida das Américas. Fale com a equipe pelo WhatsApp e tire suas dúvidas.",
    openGraphTitle: "LA Odontologia no Recreio dos Bandeirantes",
    openGraphDescription:
      "Conheça a LA Odontologia, Dr. Lucas Ferreira e Dra. Amanda Perestelo, na Avenida das Américas.",
    ...(publicSiteUrl ? { siteUrl: publicSiteUrl } : {}),
  },
  conversionEventNames: analyticsEventNames,
} as const satisfies SiteConfig;
