import React, { Component } from 'react';
import './Custom.css';

export class ConfigureDatabase extends Component {
    static displayName = ConfigureDatabase.name;

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
                            <label>Database Server name</label>
                        </div>
                        <div class="row my-1"></div>
                        <div class="row my-1">
                            <label>Database name</label>
                        </div>
                        <div class="row my-1"></div>
                        <div class="row my-1">
                            <label>Datatable name</label>
                        </div>
                    </div>
                    <div class="col col-lg-2">
                        <div class="row my-1">
                            <input type="text" />
                        </div>
                        <div class="row my-1">
                            <button type="button" class="btn float-right btn-outline-info">Connect Server</button>
                        </div>
                        <div class="row my-1">
                            <input type="text" />
                        </div>
                        <div class="row my-1">
                            <button type="button" class="btn float-right btn-outline-info">Connect Database</button>
                        </div>
                        <div class="row my-1">
                            <input type="text" multiple />
                        </div>
                    </div>
                </div>
                <button type="button" class="btn float-right btn-outline-info">Next</button>
            </div>
        );
    }
}