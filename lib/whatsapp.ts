const PHONE_NUMBER = "554399539354";
const DEFAULT_MESSAGE =
  "Olá Lucas, vi seu site e gostaria de saber mais sobre seus treinos personalizados.";

export function buildWhatsAppLink(message: string = DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encoded}`;
}

export const defaultWhatsAppMessage = DEFAULT_MESSAGE;
