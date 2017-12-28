import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'commons/Header';
import Profile from './Profile';
import ChangeAccessCode from './ChangeAccessCode';
import Language from './Language';
import RightPaneContainer from 'commons/RightPaneContainer';
import RightPane from './RightPane';

export default () => {
    return (
        <div className="pane">
            <div className="pane pane-main">
                <Header title="Settings"/>
        
                <div className="pane pane-body">
                    <Switch>
                        <Route exact path='/settings' component={Profile}/>
                        <Route path='/settings/profile' component={Profile}/>
                        <Route path='/settings/change-access-code' component={ChangeAccessCode}/>
                        <Route path='/settings/language' component={Language}/>
                    </Switch>
                </div>
            </div>
            <RightPaneContainer title="Settings">
                <div className="pane pane-item-container">
                    <RightPane />
                </div>
            </RightPaneContainer>
        </div>
    )
}