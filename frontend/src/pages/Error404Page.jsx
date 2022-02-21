import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import error404img from "../assets/error404.jpg";

const Error404Page = ({ msg }) => {
	return (
		<div className="text-center">
			<img
				src={error404img}
				alt={error404img}
				className="mx-auto d-block"
				height="300px"
			/>
			<h2>{msg ? msg : "Ooops... sorry, page not found!"} </h2>

			<Link to="/">
				<Button className="btn-md" variant="primary">
					return to homepage
				</Button>
			</Link>
		</div>
	);
};

export default Error404Page;
