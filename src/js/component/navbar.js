import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<div className="ml-auto m-3">
				<Link to="/demo">
					<button className="btn btn-success position-absolute top-0 end-0">Crear nuevo contacto </button>
				</Link>
			</div>
		</nav>
	);
};
