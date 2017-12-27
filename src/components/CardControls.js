import React from 'react';

export default (props) => {
    return  <div className="pane-controls">
                <div className="menu menu-horizontal">
                    <button id="card-edit" className="menu-item inactive" title="Редактировать карту"><i className="icon icon-edit"></i></button>
                    <button id="card-delete" className="menu-item inactive" title="Удалить карту"><i className="icon icon-delete"></i></button>
                    <a href="../card/add" id="card-new" className="menu-item" title="Добавить карту"><i className="icon icon-new"></i></a>
                </div>
            </div>
}