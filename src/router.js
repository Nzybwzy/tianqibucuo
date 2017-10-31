import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import Root from './components/Root';
import MainContainer from './components/MainContainer';

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={Root}>
                <IndexRedirect to='home'/>
                <Route path="home" component={MainContainer}>
                    
                </Route>
            </Route>
        </Router>
    );
}

export default RouterConfig;
