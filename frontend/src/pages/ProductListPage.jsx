import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const ProductListPage = () => {
	const [productDB, setProductDB] = useState();

	useEffect(() => {
		const getAllProductsAPI = async () => {
			try {
				const res = await axios(
					"https://greenlab-be.herokuapp.com/api/v1/products",
					{
						method: "GET",
						mode: "no-cors",
						headers: {
							"Access-Control-Allow-Origin": "*",
							"Content-Type": "application/json",
						},
						withCredentials: true,
						credentials: "same-origin",
					}
				);
				console.error(res.data.products);
				setProductDB(res.data.products);
				return res;
			} catch (err) {
				console.error(err);
			}
		};
		getAllProductsAPI();
	}, [productDB]);

	return (
		<div>
			<h3 className="breadcrumb-item text-muted active">Product List</h3>
			<div>
				{productDB &&
					productDB.map((item) => {
						return <h6>{item.name}</h6>;
					})}
			</div>
		</div>
	);
};

export default ProductListPage;
