import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "react-bootstrap"

function MainNavbar() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand>VitalikHey</Navbar.Brand>
                <Navbar.Text>
                    Добро пожаловать на мой сайт!
                </Navbar.Text>
            </Navbar>
        </div>
    )
}

export default MainNavbar;