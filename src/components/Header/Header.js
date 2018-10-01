import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
// import UserName from "../Header/Header";
import appLogo from "../../Images/AppLogo.jpg";
import "./Header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "UserFirstName",
            lastName: "UserLastName"
        };
    }
    render() {
        return(
            <div>
            <Navbar dark className="bg-dark" expand="md">
                <img
                    src={appLogo}
                    alt="App Logo"
                    className="AppLogo"
                />
                <NavbarBrand style={{ color: "white", textAlign: "center", marginLeft: "38%" }}>
                    SampleApp
                </NavbarBrand>
                <div style={{ display: "flex", position: "absolute", right: "10px" }}>
                {/* <UserName
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                /> */}
                </div>
            </Navbar>
        </div>
        )
    }
}

export default Header;