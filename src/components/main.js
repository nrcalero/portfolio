import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './about';
import Contact from './contact';
import Work from './work';
import Stuff from './stuff';

const Main = () => (
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Route path="/stuff" component={Stuff} />
    </Switch>
)

export default Main;