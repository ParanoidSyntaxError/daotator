import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function textGlow(hex: string): ClassValue {
	if(!hex.startsWith("#")) {
		hex = `#${hex}`;
	}

	return `text-[${hex}] [text-shadow:0_0_5px_${hex},0_0_10px_${hex}]`;
}