import {useContext, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { LoginContext, adminContext, userIDContext } from "../helper/context";
import { FormRow } from "./index";
import { BE_URL } from "../helper/const";

const LoginForm = ({ title }) => {
	let navigate = useNavigate();

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

	const [errorMsg, setErrorMsg] = useState({
		title: "",
		type: "",
		msg: "",
		status: false,
	});
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(adminContext);
	const { userID, setUserID } = useContext(userIDContext);

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setUserInputDb((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	// functions
	const handleLogin = async (e) => {
		e.preventDefault();
		console.log(userInputDb);
		try {
			const responseLogin = await fetch(`${BE_URL}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInputDb),
			});
			const loginDetails = await responseLogin.json();

			if (loginDetails.status === "OK") {
				console.log(loginDetails);
				setLoggedIn(true);
				setUserID(loginDetails.user.userID);
				if (loginDetails.role === "admin") {
					setAdmin(true);
				} else {
					setAdmin(false);
				}
				localStorage.setItem("userID", loginDetails.user.userID);
				setErrorMsg((prevState) => ({
					...prevState,
					status: false,
				}));
				navigate("/useraccount");
			}

			if (loginDetails.status !== "OK") {
				setErrorMsg({
					title: "invalid credential",
					type: "red",
					msg: "incorrect email or password",
					status: true,
				});

				setUserInputDb({
					name: "",
					email: "",
					password: "",
				});

				console.log(errorMsg);
			}
		} catch (error) {
			console.log(error);
		}
	};

	// functions
	const handleRegister = async (e) => {
		e.preventDefault();
		console.log(userInputDb);
		try {
			const responseLogin = await fetch(`${BE_URL}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInputDb),
			});
			const loginDetails = await responseLogin.json();
			console.log(loginDetails);
			if (loginDetails.status === "OK") {
				console.log(loginDetails);
				setLoggedIn(true);
				setUserID(loginDetails.user.userID);
				if (loginDetails.role === "admin") {
					setAdmin(true);
				} else {
					setAdmin(false);
				}
				localStorage.setItem("userID", loginDetails.user.userID);
				setErrorMsg((prevState) => ({
					...prevState,
					status: false,
				}));
				navigate("/useraccount");
			}

			if (loginDetails.status !== "OK") {
				setErrorMsg({
					title: "invalid credential",
					type: "red",
					msg: "incorrect email or password",
					status: true,
				});

				setUserInputDb({
					name: "",
					email: "",
					password: "",
				});

				console.log(errorMsg);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form>
			<fieldset>
				{errorMsg.status && (
					<small className="text-secondary">{errorMsg.msg}</small>
				)}

				{pathId === "/signup" && (
					<FormRow
						type="text"
						name="name"
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
				onClick={pathId === "/login" ? handleLogin : handleRegister}
			>
				{title}
			</button>
		</form>
	);
};

export default LoginForm;
