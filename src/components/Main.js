import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cards from 'containers/Cards';
import History from 'containers/History';
import Templates from 'containers/Templates';
import NewCard from 'containers/NewCard';
import Settings from 'containers/Settings';

export default () => {
    return (
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Cards} />
            <Route exact path={`${process.env.PUBLIC_URL}/cards`} component={Cards} />
            <Route path={`${process.env.PUBLIC_URL}/cards/add`} component={NewCard} />
            <Route path={`${process.env.PUBLIC_URL}/history`} component={History}/>
            <Route path={`${process.env.PUBLIC_URL}/template`} component={Templates} />
            <Route path={`${process.env.PUBLIC_URL}/settings`} component={Settings}/>
        </Switch>
    )
}