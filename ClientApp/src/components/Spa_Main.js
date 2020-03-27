import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';
import './Spa_Main.css';
import { ResultGraph } from './ResultGraph';
import { ExportData } from './ExportData';
import { EntityMapping } from './EntityMapping';
import { UploadFile } from './UploadFile';

export class Spa_Main extends Component {
    static displayName = Spa_Main.name;

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    toggleContent() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }


    render() {
        return (
            <div className="pd2">
                <div className="UploadFile">
                    <UploadFile />
                </div>
                <div className="EntityMapping">
                    <EntityMapping />
                </div>
                <div className="Export">
                    <ExportData />

                </div>
                <div className="ResultGraph">
                    <ResultGraph />

                </div>
            </div>
        );
    }
}