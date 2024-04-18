import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {

	return (

		<div className="text-center mt-5 d-flex justify-content-center">

			<div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={props.image} className="img-fluid rounded-circle" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title" >{props.fullName}</h5>
							<p className="card-text"><i className="fa-solid fa-location-dot" ></i>{props.address} </p>
							<p className="card-text"><i className="fa-solid fa-phone" ></i>{props.phone} </p>
							<p className="card-text"><i className="fa-solid fa-envelope" ></i> {props.email}</p>
						</div>

					</div>

				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	image: PropTypes.string,
	fullName: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	address: PropTypes.string,
};