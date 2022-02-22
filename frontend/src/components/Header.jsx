import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container, NavItem } from "react-bootstrap";
import { LoginContext, adminContext, userIDContext } from "../helper/context";
import { BE_URL } from "../helper/const";

const Header = () => {
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(adminContext);
	const { userID, setUserID } = useContext(userIDContext);
	let navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			const responseLogout = await fetch(`${BE_URL}/auth/logout`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			setLoggedIn(false);
			setAdmin(false);
			setUserID(false);
			localStorage.removeItem("userID");
			console.log(responseLogout);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
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
						<Nav.Link href="/useraccount">Account</Nav.Link>
						<Nav.Link>
							<span onClick={handleLogOut}>
								<i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
							</span>
						</Nav.Link>
						<Nav.Link href="/cart">
							<i className="fas fa-shopping-cart"></i> Cart
						</Nav.Link>
						<Nav.Link href="/admin">
							<i className="fa-solid fa-user-lock"></i> Admin
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
