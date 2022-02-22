import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext, userIDContext } from "../helper/context";
import { BE_URL } from "../helper/const";

const ProductCard = ({
	name,
	price,
	image,
	url,
	id,
	numOfReviews,
	averageRating,
}) => {
	// for add to cart
	//http://localhost:5000/api/carts?productId=123&qty=5&userId=321

	const { userID, setUserID } = useContext(userIDContext);

	// console.log(userID);

	function starRating(num) {
		let rate = num;
		let star = "";
		for (let i = 0; i < rate; i++) {
			star += "⭐️";
		}
		return star;
	}

	return (
		<div className="card">
			<div className="card-body">
				<Link to={url}>
					<img src={image} alt={name} />
				</Link>
				<h4 className="card-title">{name}</h4>
				<h6 className="card-subtitle mb-2 text-muted">{price}</h6>
				<p className="card-text">{starRating(averageRating)} </p>
				Card link
				<button type="button" className="btn btn-primary">
					add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
