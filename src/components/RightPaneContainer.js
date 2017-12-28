import React from 'react';

import Header from 'components/Header';

export default (props) => {
    return(
        <div id="latest-operations" className="pane pane-right">
            <Header title={props.title}/>

            <div className="pane pane-body">
                {props.children}
            </div>
        </div>
    )
}