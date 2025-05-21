
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(phoneNumber: string, message: string): string {
  // Remove any non-numeric characters from the phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  
  // Create the WhatsApp URL
  return `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;
}
