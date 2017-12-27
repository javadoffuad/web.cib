import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cards from '../containers/Cards';
import History from '../containers/History';
import Templates from '../containers/Templates';
//import Settings from '../containers/Settings';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Cards} />
            <Route path='/history' component={History}/>
            <Route path='/template' component={Templates}/>
            {/*<Route path='/settings' component={Settings}/>*/}
        </Switch>
    )
}