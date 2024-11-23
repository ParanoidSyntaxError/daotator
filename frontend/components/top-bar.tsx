import { AsciiButton } from "@/components/ascii-button";
import { textGlow } from "@/lib/utils";
import Link from "next/link";

export default function TopBar() {
	return (
		<div>
			<div
				className="flex flex-row justify-between px-6 py-2"
			>
				<Link
					href="/"
					className="md:block hidden"
				>
					<div
						className="text-6xl"
						style={textGlow()}
					>
						<span className="font-bold">DAO</span>tator
					</div>
				</Link>
				<div
					className="flex flex-row items-center justify-center gap-x-6"
				>
					<Link
						href="create"
					>
						<AsciiButton>
							CREATE
						</AsciiButton>
					</Link>
					<Link
						href="/explore"
						hidden
					>
						<AsciiButton>
							EXPLORE
						</AsciiButton>
					</Link>
					<Link
						href="/how-it-works"
					>
						<AsciiButton>
							HOW IT WORKS
						</AsciiButton>
					</Link>
				</div>
			</div>
		</div>
	);
}
