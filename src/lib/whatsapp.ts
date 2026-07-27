import { siteConfig } from "../config/site";

export const buildWhatsAppUrl = (message?: string): string => {
  const trimmedMessage = message?.trim();

  if (!trimmedMessage) {
    return siteConfig.whatsappUrl;
  }

  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(trimmedMessage)}`;
};
