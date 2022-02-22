import { useState, useEffect } from "react";

const AlertBox = ({ type, title, msg }) => {
	// const [show, setShow] = useState(true);

	// useEffect(() => {
	// 	setShow(true);
	// }, [show]);

	return (
		<div className="alert alert-dismissible alert-secondary">
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="close"
			></button>

			<strong>{title}</strong>
			<p>{msg}</p>
		</div>
	);
};

export default AlertBox;
