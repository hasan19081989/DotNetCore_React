import React, { Component } from 'react';
import { Body } from './Body';
import { NavMenu } from './NavMenu';
import './Custom.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="overflow-hidden">
                <NavMenu />
                <Body />
                {this.props.children}
            </div>
        );
    }
}
