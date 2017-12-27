import React from 'react';

export default (props) => {
    return(
        <div className="pane pane-right-fixed">
            <div className="latest-payment-header right-search">
                {props.children}
            </div>
        </div>
    )
}