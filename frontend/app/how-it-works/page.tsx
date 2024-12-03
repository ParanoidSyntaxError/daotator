import { textGlow } from "@/lib/utils";

const items = [
	{
		title: "1. Raise ETH",
		description: "Daotators raise ETH for their DAO"
	},
	{
		title: "2. Make proposals",
		description: "Proposals can only be made by daotators"
	},
	{
		title: "3. DAO votes",
		description: "Token holders vote on the daotators proposals"
	},
	{
		title: "4. DAO profits",
		description: "Profits from proposals are returned to the DAO"
	},
];

export default function HowItWorksPage() {
	return (
		<div
			className="flex flex-col text-left w-fit mx-auto md:mt-24 mt-8 gap-y-8"
		>
			<div
				className="text-5xl font-bold"
				style={{ ...textGlow() }}
			>
				How It Works
			</div>
			{items.map((item, index) => 
				<div
					key={index}
				>
					<div
						className="text-4xl"
						style={{ ...textGlow() }}
					>
						{item.title}
					</div>
					<div
						style={{ ...textGlow() }}
					>
						{item.description}
					</div>
				</div>
			)}
		</div>
	);
}
