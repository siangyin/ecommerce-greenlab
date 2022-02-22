import { useState, useEffect } from "react";
import { LoadingSpinner, ProductCard } from "../components";
import { BE_URL } from "../helper/const";

const ProductListPage = () => {
	const [productDB, setProductDB] = useState();

	const url = `${BE_URL}/products`;

	const getAllProductsAPI = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setProductDB(data.data);
			console.log(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProductsAPI();
	}, []);

	return (
		<div>
			<h3 className="breadcrumb-item text-muted active">Product List</h3>
			<div>
				{productDB &&
					productDB.map((item) => {
						return (
							<ProductCard
								key={item._id}
								name={item.name}
								price={item.price}
								image={item.image}
							/>
						);
					})}
			</div>

			{/* divider */}
		</div>
	);
};

export default ProductListPage;
