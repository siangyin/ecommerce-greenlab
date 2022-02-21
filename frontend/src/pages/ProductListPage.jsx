import { useState, useEffect } from "react";

import axios from "axios";

const ProductListPage = () => {
	const [productDB, setProductDB] = useState();

	const url = `http://localhost:5050/api/v1/products`;

	const getAllProductsAPI = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setProductDB(data.products);
		} catch (error) {
			console.log("error>>>", error);
		}
	};

	useEffect(() => {
		getAllProductsAPI();
	}, [productDB]);

	return (
		<div>
			<h3 className="breadcrumb-item text-muted active">Product List</h3>
			<div>
				{productDB &&
					productDB.map((item) => {
						return <h6 key={item._id}>{item.name}</h6>;
					})}
			</div>
		</div>
	);
};

export default ProductListPage;
