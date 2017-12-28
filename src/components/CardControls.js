import React from 'react';

export default (props) => {
    return  <div className="pane-controls">
                <div className="menu menu-horizontal">
                    {props.children}
                </div>
            </div>
}