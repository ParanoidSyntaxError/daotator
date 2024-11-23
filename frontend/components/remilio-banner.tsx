import { textGlow } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function RemilioBanner({
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<div
			{...props}
		>
			<div
				className="flex flex-col items-center justify-center gap-y-4"
			>
				<div>
					<Image
						src="/ascii-remilio-glow.png"
						alt=""
						width={512}
						height={512}
						className="select-none pointer-events-none"
						style={{
							filter: "sepia(100%) saturate(1000%) brightness(70%) hue-rotate(60deg)",
						}}
					/>
					<div
						className="text-xs text-center -mt-4 mr-10 opacity-25"
						style={{
							...textGlow(),
						}}
					>
						<Link
							href="https://www.scatter.art/collection/redacted-remilio-babies/gallery/nfts/1329"
						>
							#1329
						</Link>
					</div>
				</div>
				<div
					className="text-5xl text-center"
					style={{
						...textGlow(),
					}}
				>
					Be The <span className="font-bold">Dictator</span> of Your <span className="font-bold">DAO</span>
				</div>
				<div
					className="text-xl text-center"
					style={{
						...textGlow(),
					}}
				>
					Raise ETH, make proposals, and have your DAO vote
				</div>
			</div>
		</div>
	);
}
