import React from "react";

import error404img from "../assets/error404.jpg";

const Error404Page = () => {
	return (
		<div className="text-center">
			<img
				src={error404img}
				alt={error404img}
				className="mx-auto d-block"
				height="300px"
			/>
			<h2>Ooops... sorry, there was an error!</h2>
			<button type="button" class="btn btn-primary">
				return to homepage
			</button>
		</div>
	);
};

export default Error404Page;
