import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EventObj from './event';
import CalendarObj from './calendar';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={CalendarObj}/> 
                <Route path="/event" exact component={EventObj}/> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;