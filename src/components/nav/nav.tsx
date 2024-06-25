import { Link, redirect, useNavigate } from "react-router-dom";
import { Gem } from "lucide-react";
import { Button } from "../ui/button";
import { googleLogout } from "@react-oauth/google";

export default function Nav() {
	const navigate = useNavigate()
	const logout = () => {
		googleLogout()
		localStorage.removeItem("user")
		navigate("/login")
	}

	return (
		<div className="flex h-20 items-center justify-between py-6">
			<Link to="/" className="items-center space-x-2 flex">
				<Gem />
				<span className="font-bold inline-block">Constellations</span>
			</Link>
			<nav>
				<Button
					variant="secondary"
					className="px-4"
					onClick={logout}
				>
					Logout
				</Button>
			</nav>
		</div >

	)
}


