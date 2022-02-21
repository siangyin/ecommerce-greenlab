import React from "react";
import { useLocation, Link } from "react-router-dom";
import { LoginForm } from "../components";

const UserSignUpPage = () => {
	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};
	let pathId = usePathname();

	return (
		<div className="card border-0 border-light shadow-0 mb-3">
			<legend>{pathId === "/login" ? "login" : "create a new account"} </legend>
			<LoginForm title="signup" />
		</div>
	);
};

export default UserSignUpPage;
