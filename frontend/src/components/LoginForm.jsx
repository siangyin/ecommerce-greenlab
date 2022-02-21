import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { FormRow, AlertBox } from "./index";

const LoginForm = ({ title }) => {
	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};
	let pathId = usePathname();

	const [userInputDb, setUserInputDb] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [errorMsg, setErrorMsg] = useState(false);

	// functions

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setUserInputDb((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleRegister(e) {
		e.preventDefault();
			console.log(userInputDb);
		if (!userInputDb.name || !userInputDb.email || !userInputDb.password) {
			setErrorMsg(true);
		}
	}

	return (
		<form>
			<fieldset>
				{errorMsg && (
					<AlertBox
						type="red"
						msg="please input all field"
						title="Incomplete information"
					/>
				)}
				{pathId === "/signup" && (
					<FormRow
						type="text"
						name="username"
						value={userInputDb.name}
						handleChange={handleChange}
						labelText="username"
					/>
				)}

				<FormRow
					type="email"
					name="email"
					value={userInputDb.email}
					handleChange={handleChange}
				/>

				<FormRow
					type="password"
					name="password"
					value={userInputDb.password}
					handleChange={handleChange}
				/>
			</fieldset>

			<div className="mt-2 d-grid gap-2">
				<small>
					{title === "signup" ? "Already have an account? " : "New user? "}
					<Link to={pathId === "/login" ? "/signup" : "/login"}>
						{title === "signup" ? "Login here" : "Register here"}
					</Link>
				</small>
			</div>

			<button
				className="btn btn-primary mt-4"
				type="button"
				onClick={handleRegister}
			>
				{title}
			</button>
		</form>
	);
};

export default LoginForm;
