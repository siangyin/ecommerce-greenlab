import React from "react";

const FormRow = ({ type, name, value, handleChange, labelText }) => {

	return (
		<div className="form-group row">
			<label className="form-label mt-4" htmlFor={name}>
				{labelText || name}
			</label>
			<input
				type={type}
				className="form-control"
				// if invalid input class/l is-invalid or is-valid
				name={name}
				value={value}
				onChange={handleChange}
			/>
			{/* <div className="invalid-feedback">
						Sorry, that username's taken. Try another?
					</div> */}
		</div>
	);
};

export default FormRow;
