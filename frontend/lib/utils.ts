import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const primaryColor = "#1DD747";

export function textGlow(hex: string = primaryColor) {
	return {
		textShadow: `0 0 5px ${hex}, 0 0 10px ${hex}`
	};
}