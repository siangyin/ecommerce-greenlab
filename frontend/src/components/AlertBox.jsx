import { useState } from "react";

const AlertBox = ({ type, title, msg }) => {
	const [alertStyle, setAlertStyle] = useState(
		"alert alert-dismissible alert-light"
	);

	if (type === "red") {
		setAlertStyle = "alert alert-dismissible alert-secondary";
	}
	return (
		<div className={alertStyle}>
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
			></button>
			<strong>{title}</strong>
			<p>{msg}</p>
		</div>
	);
};

export default AlertBox;
