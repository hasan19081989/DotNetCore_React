import React, { Component } from 'react';
import './Custom.css';

export class Configuration extends Component {
    static displayName = Configuration.name;

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
            <div className="pd2">
                <div class="row">
                    <div class="col col-lg-2 ml-4">
                        <div class="row my-1">
                            <label for="dbServer">Database Server:</label>
                        </div>
                        <div class="row my-1">
                            <label for="dbName">Database Name:</label>
                        </div>
                        <div class="row my-1">
                            <label for="authType">Authentication type:</label>
                        </div>
                        <div class="row my-1">
                            <label for="usr">Username:</label>
                        </div>
                        <div class="row my-1">
                            <label for="pwd">Password:</label>
                        </div>
                    </div>
                    <div class="col col-lg-3">
                        <div class="row  my-1 px-1">
                            <input type="text" id="dbServer" />
                        </div>
                        <div class="row my-1 px-1">
                            <input type="dropdown" id="dbName" />
                        </div>
                        <div class="row my-1 px-1">
                            <div class="dropdown">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">Authentication Type</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Windows authentication</a>
                                    <a class="dropdown-item active" href="#">Anonymous authentication</a>
                                </div>
                            </div>
                            <div class="row my-1 px-1">
                                <input type="text" id="usr" />
                            </div>
                            <div class="row my-1 px-1">
                                <input type="password" id="pwd" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={this.onSubmitPrevious} class="btn float-left m-2 btn-outline-info">Save</button>
            </div>
        );
    }
}