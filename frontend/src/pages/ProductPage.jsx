import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BE_URL } from "../helper/const";

const ProductPage = () => {
	const { id } = useParams();
	const [singleProdDB, setSingleProdDB] = useState();

	console.log(id);

	useEffect(() => {
		axios
			.get(`${BE_URL}/products/${id}`)
			.then((res) => {
				console.log(res.data);
				if (res.data.status === "OK") {
					setSingleProdDB(res.data.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src={singleProdDB.image}
				className="card-img-top"
				alt={singleProdDB.name}
			/>
			<div className="card-body">
				<h5 className="card-title text-primary">{singleProdDB.name}</h5>
				<p className="card-text">{singleProdDB.description}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					Reviews: {singleProdDB.numOfReviews}
				</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
			</ul>
			<div className="card-body">
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
};

export default ProductPage;
