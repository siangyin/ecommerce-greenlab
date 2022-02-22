import React from "react";

const ProductCard = ({ name, price, image, url }) => {
	return (
		<>
			<div className="card">
				<div className="card-body">
					<img src={image} alt="img"></img>
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{price}</p>
					<a href={url} className="btn btn-primary">
						add to cart
					</a>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
