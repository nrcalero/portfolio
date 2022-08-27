import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Work from './work';
import Other from './other';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Route path="/other" component={Other} />
    </Switch>
)

export default Main;