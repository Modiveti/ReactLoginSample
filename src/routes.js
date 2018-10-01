import React from 'react';
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";

const createRoutes = props => (
    <div>
        <Route  exact path="/" 
            render={props => ( <Login  {...props}  /> )}
        />
        <Route  exact path="/Home" 
            render={props => ( <Home  {...props} /> )}
        />
    </div>
);

export default createRoutes;
