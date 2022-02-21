import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					<img
						src="https://altusimpact.com/wp-content/uploads/2020/05/white-leaf.png"
						type="image/png"
						width="25"
					/>{" "}
					Greenlab
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Shop" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/products">All Products</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/products/plants">
								Plants
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/essential">
								Gardening Essentials
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/services">
								Services
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/signup">Sign up</Nav.Link>
						<Nav.Link href="/account">My Account</Nav.Link>
						<Nav.Link href="/admin">Admin Only</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
