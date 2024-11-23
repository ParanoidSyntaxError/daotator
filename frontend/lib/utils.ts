import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function textGlow(hex: string = "#00FF77") {
	return {
		textShadow: `0 0 2px ${hex}, 0 0 10px ${hex}`
	};
}