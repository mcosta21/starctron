import React, { useContext } from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import MenuItems from './pages/MenuItems';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import { LoginContext } from './contexts/LoginContext';

function Routes() {

    const context = useContext(LoginContext);

    return (
        <HashRouter>
            { /*context.login.username === undefined && <Redirect to="/" exact component={SignIn} /> */}
            <Route path="/" exact component={SignIn} />
            <Route path="/home" component={Home} />
            <Route path="/layout" component={Layout} />
            <Route path="/menuitems" component={MenuItems} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/page4" component={Page4} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forgotpassword" component={ForgotPassword} />
        </HashRouter>
    )
}

export default Routes;