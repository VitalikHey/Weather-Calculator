import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Container, Nav } from "react-bootstrap"
import iconCalculate from "../../images/iconCalculate.png"
import iconRecipe from "../../images/iconRecipe.png"

function MainNavbar() {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/App">Recipe&Calculate</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/App">
                            <img
                                alt="App"
                                src={iconCalculate}
                                height="25px"
                                width="25px"
                            />
                        </Nav.Link>
                        <Nav.Link href="/App">
                            <img
                                alt="App"
                                src={iconRecipe}
                                height="25px"
                                width="25px"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MainNavbar;