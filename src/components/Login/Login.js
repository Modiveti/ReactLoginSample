import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ReactLoading from "react-loading";
import { fetchPeople } from "../../Services/apiService";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      loading: false,
      errorInfo: ""
    };
  }

  validateForm() {
    return this.state.userName.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  loadingIndicator = (loading) => {
    if(loading) {
      return ( <ReactLoading className="Spinner" type="spin" color="#D2B48C" height={60} width={40} /> );
    }
    return null;
  }

  componentWillUnmount() {
    this.props.setHomePage(false);
    // let userObj = {};
    // userObj.firstName = "Mahesh";
    // userObj.lastName = "Reddy";
    // this.props.setUserName(userObj);
  }

  userLogin() {
    this.setState({ loading: true})
    let { userName, password } = this.state;
    let userInfo={};
    userInfo.userName = userName;
    userInfo.passWord = password;
    // this.props.history.push("/Home");
    fetchPeople().then( res => {
      if(res.status) {
        this.setState({ 
          loading: false
        })
        this.props.history.push("/Home");
      }
    })
    .catch( err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="userName" bsSize="large">
            <ControlLabel>UserName</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.userLogin.bind(this)}
          >
            Login
          </Button>
        </form>
          {this.loadingIndicator(this.state.loading)}
          <div className="ErrorInfo">
            {this.state.errorInfo}
          </div>
      </div>
    );
  }
}

export default withRouter(Login);