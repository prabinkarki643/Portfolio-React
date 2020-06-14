import React, { Component } from 'react';
import { Redirect,Route} from 'react-router-dom';
import Auth from '../https/Auth';

const PrivateRoute = ({component:Component, ...rest}) => {
    return ( 
        <Route
            {...rest}
            render = {props => Auth.isAuthenticated() ?
                                <Component 
                                    {...props}/> :
                                <Redirect  
                                    to={{pathname:'/SignIn',state:{from:props.location,message:"Please sign in again!!!"}}}/>
            }
        />
     );
}
 
export default PrivateRoute;
