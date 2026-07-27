export type NavigationItem = {
  label: string;
  href: string;
};

export const primaryNavigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Profissionais", href: "/#profissionais" },
  { label: "Localização", href: "/#localizacao" },
] as const satisfies readonly NavigationItem[];

export const legalNavigation = [
  { label: "Privacidade", href: "/privacidade" },
] as const satisfies readonly NavigationItem[];
