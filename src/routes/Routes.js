import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/index';
import ResponsiveDrawer from '../components/ResponsiveDrawer';

class Routes extends Component {

    render () {
        return (
            <ResponsiveDrawer history={this.props.history}>
            <Switch>
                <Route path="/" component={Home} exact/>

                <Route  component = {()=><h1>NOT FOUND</h1>} exact/>
            </Switch>
            </ResponsiveDrawer>
        );
    }
} 

export default withRouter(Routes);