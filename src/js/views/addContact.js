import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({})
	const navigate = useNavigate()
	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value })
	}
	console.log(data);
	const handleSaveClick = (event) => {
		event.preventDefault()

		actions.newContact(data);
		navigate("/")
	}

	return (
		<div className="container">
			<h1 className="text-center">Add a new contact</h1>
			<form onSubmit={handleSaveClick}>
				<div className="mb-3">
					<label htmlFor="fullName" className="form-label">Full name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Full name" name="name" onChange={(event) => handleChange(event)} />
				</div>

				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email</label>
					<input type="email" className="form-control" id="email" name="email" onChange={(event) => handleChange(event)} />
				</div>

				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input type="number" className="form-control" id="phone" name="phone" onChange={(event) => handleChange(event)} />
				</div>

				<div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input type="text" className="form-control" id="address" name="address" onChange={(event) => handleChange(event)} />
				</div>

				<div className="d-grid gap-2">
					<button className="btn btn-primary" type="submit" >Save</button>
				</div>
			</form>
			<Link to="/">
				<button className="btn btn-outline-primary">or get back to contacts</button>
			</Link>
		</div>
	);
};

export default AddContact;
