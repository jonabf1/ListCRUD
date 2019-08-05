import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/';
import Products from './pages/products/';
import New from './pages/new/';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} /> 
            <Route path="/products/:id" component={Products} />
            <Route path="/new" component={New} />
        </Switch>
    </BrowserRouter>
);

export default Routes;