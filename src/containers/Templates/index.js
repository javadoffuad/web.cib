import React from 'react';

import Header from '../../components/Header';
import RightPaneContainer from '../../components/RightPaneContainer';
import RightFixedPane from '../../components/RightFixedPane';
import SearchPane from '../../components/SearchPane';

export default () => {
    return (
        <div className="pane">
            <div className="pane pane-main">
                <Header title="Template"/>
                <div className="pane pane-body">template page</div>
            </div>
            <RightPaneContainer title="Filter">
                <RightFixedPane>
                    <SearchPane />
                </RightFixedPane>
                
                <div className="pane pane-item-container">
                    <div className="list list-right">
                        form
                    </div>
                </div>
            </RightPaneContainer>
        </div>
    )
}