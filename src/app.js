import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './pages/Layout';
import Archives from './pages/Archives';
import Features from './pages/Features';
import Settings from './pages/Settings';


const app = document.getElementById('container');

const routes = (
    <Router history={hashHistory} >
        <Route path='/' component={Layout}>
            <IndexRoute component={Features}></IndexRoute>
            <Route path='archives(/:article)' component={Archives} >
                 
            </Route>
            <Route path='settings' component={Settings} >
                 
            </Route>
        </Route>
    </Router  >
)
ReactDom.render(routes , app)