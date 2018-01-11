import {  Router, Route, Switch } from 'react-router';
import React, {Component, PropTypes} from 'react';
import home from '../containers/home';
import App from '../App.js';
import detail from '../containers/detail';
import list from '../containers/list';
import notFound from '../containers/notFound';
class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={home}/>
                    <Route path='list' component={list}/>
                    <Route path='detail' component={detail}/>
                    <Route path="*" component={notFound}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap;