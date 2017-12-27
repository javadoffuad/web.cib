import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from './Header';

export default () => {
    return(
        <div id="leftNavigation" className="pane pane-left">
            <Header title="Menu" />
    
            <div className="pane pane-body">
                <div className="list nav-list">
                    <div className="nav-item nav-link username">
                        <NavLink to="/settings/profile" className="nav-name">Fuad Javadov</NavLink>
                    </div>
                    <NavLink exact className="nav-item nav-card" to="/">
                        <i className="icon icon-card"></i>
                        <span className="nav-name">Cards</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-history" to="/history">
                        <i className="icon icon-history"></i>
                        <span className="nav-name">History</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-template" to="/template">
                        <i className="icon icon-template"></i>
                        <span className="nav-name">Templates</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item deactive" to="#">
                        <i className="icon icon-map"></i>
                        <span className="nav-name">Find on Map</span>
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-setting" to="/settings">
                        <i className="icon icon-setting"></i>
                        <span className="nav-name">Settings</span>
                    </NavLink>
                </div>
                <NavLink activeClassName="active" className="nav-item nav-item-logout-default user-logout" to="/logout">
                    <i className="icon icon-logout"></i>
                    <span className="nav-name">Logout</span>
                </NavLink>
            </div>
        </div>
    )
}