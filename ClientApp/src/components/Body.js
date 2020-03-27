import React, { Component } from 'react';
import './Custom.css';
import { Progress } from './Progress';
import { Sidebar } from './Sidebar';

export class Body extends Component {
    static displayName = Body.name;

    constructor(props) {
        super(props);

        this.toggleBody = this.toggleBody.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleBody() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className="wrapper d-flex align-items-stretch">
                <Sidebar />                
            </div>
        );
    }
}
