import { cn, textGlow } from "@/lib/utils";

export default function HomePage() {
	return (
		<div>	
			<div
				className={cn(
					textGlow("#FFFFFF"),
					"text-lg"
				)}
			>
				DAOtator
			</div>
		</div>
	);
}
