import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

// const routes = createRoutes();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: true,
      firstName: "",
      lastName: ""
    }
    this.setHomePage = this.setHomePage.bind(this); 
    // this.setUserName = this.setUserName.bind(this);
  }

  setHomePage(value) {
    if(this.state.loginPage === true) {
      this.setState({
        loginPage: value
      })
    }
  }

  // setUserName(userName) {
  //   this.setState({
  //     firstName: userName.firstName,
  //     lastName: userName.lastName
  //   })
  // }
  
  render() {
    return (
          <div>
            { !this.state.loginPage && (
              <header>
                <Header 
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                />
              </header>
            )}
            <Route  exact path="/"
                render={props => ( 
                  <Login 
                    {...props}  
                      setHomePage={this.setHomePage} 
                    /> 
                )}
            />
            <Route  exact path="/Home" 
                render={props => (
                  <Home {...props} /> 
                )}
            />
          </div>
    );
  }
}

export default withRouter(App);
