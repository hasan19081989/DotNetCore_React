import React, { Component } from 'react';
import { Body } from './Body';
import { NavMenu } from './NavMenu';
import { Container } from 'reactstrap';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Body />
                {this.props.children}
            </div>
        );
    }
}
