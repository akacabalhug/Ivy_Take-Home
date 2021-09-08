import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineHome } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <div className = "sidebar-container">
                <div className = "sidebar">
                    <div className = "row my-5">
                        <div className = "logo-wrapper">
                            <img className = "logo" src = '/taskflow-logo.png' alt = "logo"/>
                            <img className = "logo-small" src = '/taskflow-logo-small.png' alt = "logo"/>  
                        </div>
                    </div>
                    <div className = "row mt-5">
                        <ul className = "list-group list-group-flush">
                            <li className = 'sidebar-item my-list-group'>
                                <NavLink to = '/home' activeClassName="active">
                                    <AiOutlineHome size = '40px'/>
                                    <span className = "sidebar-text"> To Do</span>
                                </NavLink>
                            </li>
                            <li className = 'sidebar-item my-list-group'>
                                <NavLink to = '/completed' activeClassName = "active">
                                    <BsCardChecklist size = '40px'/>
                                    <span className = "sidebar-text"> Completed</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;