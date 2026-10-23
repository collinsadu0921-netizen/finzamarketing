/**
 * Finza's official WhatsApp contact and guided-trial link.
 *
 * Keep the number and prefilled message here so CTAs do not drift apart.
 * This is standard WhatsApp click-to-chat only: no Business API or chatbot.
 */

export const WHATSAPP_LOCAL_NUMBER = "0536337615";
export const WHATSAPP_INTERNATIONAL_NUMBER = "+233536337615";
export const WHATSAPP_WA_NUMBER = "233536337615";

export const WHATSAPP_TRIAL_MESSAGE =
  "Hello Finza, I'm interested in a guided trial of your accounting software. Can you help me get started?";

/**
 * encodeURIComponent leaves apostrophes untouched. Encode them as %27 so the
 * prefilled sentence is fully URL-safe when a chat client reads the text param.
 */
const encodeWhatsAppMessage = (message: string): string =>
  encodeURIComponent(message).replace(/'/g, "%27");

export function buildWhatsAppUrl(message: string = WHATSAPP_TRIAL_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_WA_NUMBER}?text=${encodeWhatsAppMessage(message)}`;
}

export const WHATSAPP_TRIAL_URL = buildWhatsAppUrl();

/** Non-sensitive CTA placement labels used only for click analytics. */
export const WHATSAPP_CTA_SOURCES = [
  "homepage_hero",
  "homepage_footer",
  "request_trial",
  "features",
  "product_tour",
  "contact",
  "floating_button",
] as const;

export type WhatsAppCtaSource = (typeof WHATSAPP_CTA_SOURCES)[number];
