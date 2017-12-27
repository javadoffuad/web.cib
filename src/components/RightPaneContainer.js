import React from 'react';

import Header from './Header';

export default (props) => {
    return(
        <div className="pane pane-right">
            <Header title={props.title}/>

            <div className="pane pane-body">
                {props.children}
            </div>
        </div>
    )
}