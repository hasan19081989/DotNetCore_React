import React, { Component } from 'react';
import './Custom.css';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.toggleContent = this.toggleContent.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleContent() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        
                    </div>
                </div>
            </div >
        );
    }
}