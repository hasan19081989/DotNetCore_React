import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import './Custom.css';

export class Sidebar extends Component {
    static displayName = Sidebar.name;

    constructor(props) {
        super(props);

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleSidebar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="col-lg-2 p-4 pt-5 float-left">
                    <img className="img logo img-rounded mb-5" src={"/logo.png"} alt="logo" />                    
                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <NavLink tag={Link} to="/UploadFile">Workbook</NavLink>
                        </li>
                        <li className="active">
                            <NavLink tag={Link} to="/ConfigureDatabase">Database</NavLink>
                        </li>
                        <li className="active">
                            <NavLink tag={Link} to="/Configuration">Configuration</NavLink>
                        </li>
                        <li className="config">
                            <NavLink tag={Link} to="/Configuration">Sign Out</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
