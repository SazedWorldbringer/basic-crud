"use client"

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}
	}, []);

	const login = (userData: any) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData))
	}

	const logout = () => {
		setUser(null)
		localStorage.removeItem("user")
	}

	return (
		<div>{ children } </div>
	)
}
