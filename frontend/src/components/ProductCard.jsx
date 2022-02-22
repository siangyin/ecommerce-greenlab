import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext, userIDContext } from "../helper/context";
import { BE_URL } from "../helper/const";

const ProductCard = ({ name, price, image, url, id }) => {
	//http://localhost:5000/api/carts?productId=123&qty=5&userId=321

	const { userID, setUserID } = useContext(userIDContext);

	console.log(userID);

	return (
		<div className="card">
			<div className="card-body">
				<Link to={url} className="card-link">
					<img src={image} alt={name} />
					<h4 className="card-title">{name}</h4>
					<h6 className="card-subtitle mb-2 text-muted">{price}</h6>
					<p className="card-text">
						<i className="fa-solid fa-star"></i>
					</p>
					Card link
				</Link>
				<button className="card-link">Add to cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
