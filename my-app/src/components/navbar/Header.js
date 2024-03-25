import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav} from "react-bootstrap"
import iconCalculate from "../../images/iconCalculate.png"
import iconRecipe from "../../images/iconRecipe.png"
import "./Header.css"

function Header() {
    return (
        <Navbar bg="light">
            <Navbar.Brand className="mr-auto" href="/">Recipe&Calculate</Navbar.Brand>
            <Nav className="d-flex justify-content-between w-10">
                <Nav.Link href="/calculate" className="zoom">
                    <img
                        className="ml-auto"
                        alt="App"
                        src={iconCalculate}
                        height="25px"
                        width="25px"
                    />
                </Nav.Link>
                <Nav.Link href="/recipe" className="zoom">
                    <img
                        className="ml-auto"
                        alt="App"
                        src={iconRecipe}
                        height="25px"
                        width="25px"
                    />
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;