import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import './Custom.css';
import './Scrollbar.css';

export class Progress extends Component {
    static displayName = Progress.name;

    constructor(props) {
        super(props);

        this.toggleProgress = this.toggleProgress.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleProgress() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (            
            <Navbar className="navbar-bottom footer navbar-expand-md navbar-dark bg-primary">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink tag={Link} to="/UploadFile">1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink tag={Link} to="/EntityMapping">2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink tag={Link} to="/ExportData">3</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink tag={Link} to="/ResultGraph">4</NavLink>
                    </li>
                </ul>
            </Navbar>
        );
    }
}
