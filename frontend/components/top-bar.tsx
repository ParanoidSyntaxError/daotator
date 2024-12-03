import { AsciiButton } from "@/components/ascii-button";
import { textGlow } from "@/lib/utils";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopBar() {
	return (
		<div>
			<div
				className="flex flex-row justify-between px-6 py-2"
			>
				<Link
					href="/"
				>
					<div
						className="md:text-6xl text-4xl"
						style={textGlow()}
					>
						<span className="font-bold">DAO</span>tator
					</div>
				</Link>
				<div
					className="md:flex hidden flex-row items-center justify-center md:gap-x-6 gap-x-4"
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
				<div
					className="md:hidden flex"
				>
					<DropdownMenu>
						<DropdownMenuTrigger
							asChild
						>
							<div
								className="h-5 text-xl mt-3"
							>
								<p className="leading-[0.5rem] -mt-3" style={textGlow()}>__</p>
								<p className="leading-[0.5rem]" style={textGlow()}>__</p>
								<p className="leading-[0.5rem]" style={textGlow()}>__</p>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="bg-[#0A0A0A] rounded-none border-[#00FF77] text-[#00FF77] mr-4"
							style={{
								...textGlow(),
								boxShadow: `0 0 2px #00FF77, 0 0 5px #00FF77`
							}}
						>
							<DropdownMenuItem>
								<Link
									href="/create"
								>
									CREATE
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									href="/how-it-works"
								>
									HOW IT WORKS
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
