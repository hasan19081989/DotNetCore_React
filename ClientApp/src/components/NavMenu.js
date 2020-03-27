import React, { Component } from 'react';
import './Custom.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"></a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <span className="glyphicon glyphicon-log-in"></span><button type="button" onClick={this.onSubmitPrevious} class="btn btn-basic btn-sm">Sign Out</button>
                    </ul>
                </div>
            </nav>
        );
    }
}
