import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <div className="list list-right list-category">
            <NavLink exact className="item nav-profile" to="/settings/profile">
                <div className="txt-center">
                    <div className="merchant-name">Profile</div>
                </div>
            </NavLink>
            <NavLink activeClassName="active" className="item nav-pass" to="/settings/change-access-code">
                <div className="txt-center">
                    <div className="merchant-name">Change access code</div>
                </div>
            </NavLink>
            <NavLink activeClassName="active" className="item nav-lang" to="/settings/language">
                <div className="txt-center">
                    <div className="merchant-name">Language</div>
                </div>
            </NavLink>
        </div>
    )
}