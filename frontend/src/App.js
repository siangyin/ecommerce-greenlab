import React from "react";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<h1>HELLO</h1>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default App;
