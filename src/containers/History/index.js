import React from 'react';

import Header from 'components/Header';
import RightPaneContainer from 'components/RightPaneContainer';
import RightFixedPane from 'components/RightFixedPane';
import SearchPane from 'components/SearchPane';

export default () => {
    return (
        <div className="pane">
            <div className="pane pane-main">
                <Header title="История оплат"/>
                <div className="pane pane-body">history page</div>
            </div>
            <RightPaneContainer title="Фильтр">
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