import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";
import {
	ProductListPage,
	ProductPage,
	UserLoginPage,
	UserSignUpPage,
	UserAccountPage,
	CartPage,
	AdminPage,
	ProductSetupPage,
	OrderListPage,
	OrderPage,
	Error404Page,
} from "./pages";

import { LoginContext, adminContext, userIDContext } from "./helper/context";

const App = () => {
	const [loggedIn, setLoggedIn] = useState();
	const [userID, setUserID] = useState();
	const [admin, setAdmin] = useState();

	return (
		<LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
			<userIDContext.Provider value={{ userID, setUserID }}>
				<adminContext.Provider value={{ admin, setAdmin }}>
					<Router>
						<Header />
						<main className="py-3">
							<Container>
								{/* // current homepage = all products page */}
								<Routes>
									<Route exact path="/" element={<ProductListPage />} />
									<Route exact path="/login" element={<UserLoginPage />} />
									<Route exact path="/signup" element={<UserSignUpPage />} />
									<Route
										exact
										path="/useraccount"
										element={<UserAccountPage />}
									/>
									<Route exact path="/cart" element={<CartPage />} />
									<Route exact path="/admin" element={<AdminPage />} />
									<Route exact path="/products" element={<ProductListPage />} />
									<Route exact path="/product/:id" element={<ProductPage />} />
									{/* // use same element: ProductSetupPage for edit and new */}
									<Route
										exact
										path="/product-new"
										element={<ProductSetupPage />}
									/>
									<Route
										exact
										path="/product-edit/:id"
										element={<ProductSetupPage />}
									/>
									<Route exact path="/orders" element={<OrderListPage />} />
									<Route exact path="/order/:id" element={<OrderPage />} />
									{/* // all unathorised/ not found page */}
									<Route path="*" element={<Error404Page />} />
								</Routes>
							</Container>
						</main>

						<Footer />
					</Router>
				</adminContext.Provider>
			</userIDContext.Provider>
		</LoginContext.Provider>
	);
};

export default App;
