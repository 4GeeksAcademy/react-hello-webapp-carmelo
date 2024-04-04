import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const handleSaveClick = () => {
		const requestData = {
			full_name: document.getElementById('fullName').value,
			email: document.getElementById('email').value,
			agenda_slug: "Carmelo",
			address: document.getElementById('address').value,
			phone: document.getElementById('phone').value
		};
		actions.newContact(requestData);
	}

	return (
		<div className="container">
			<h1 className="text-center">Add a new contact</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="fullName" className="form-label">Full name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Full name" />
				</div>

				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email</label>
					<input type="email" className="form-control" id="email" />
				</div>

				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input type="number" className="form-control" id="phone" />
				</div>

				<div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input type="text" className="form-control" id="address" />
				</div>

				<div className="d-grid gap-2">
					<button className="btn btn-primary" type="button" onClick={handleSaveClick}>Save</button>
				</div>
			</form>
			<Link to="/">
				<button className="btn btn-outline-primary">or get back to contacts</button>
			</Link>
		</div>
	);
};

export default Demo;
