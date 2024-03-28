import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav} from "react-bootstrap"
import iconCalculate from "../../images/calculator-svgrepo-com (2).svg"
import iconWeather from "../../images/weather-svgrepo-com (4).svg"
import "./Header.css"

// Иконку погоды обязательно заменить

function Header() {
    return (
        <Navbar style={{backgroundColor: "white"}}>
            <Navbar.Brand className="mr-auto" href="/"><span className="brand-style">Weather&Calculate</span></Navbar.Brand>
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
                        src={iconWeather}
                        height="25px"
                        width="25px"
                    />
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;