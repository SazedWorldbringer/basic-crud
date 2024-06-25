import { Link } from "react-router-dom";
import { Gem } from "lucide-react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";

export default function Nav() {
	return (
		<div className="flex h-20 items-center justify-between py-6">
			<Link to="/" className="items-center space-x-2 flex">
				<Gem />
				<span className="font-bold inline-block">Constellations</span>
			</Link>
			<nav>
				<Link
					to="/login"
					className={cn(
						"px-4",
						buttonVariants({ variant: "secondary" })
					)
					}
				>
					Login
				</Link>
			</nav>
		</div >

	)
}


