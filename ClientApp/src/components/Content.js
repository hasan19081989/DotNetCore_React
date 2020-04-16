import React, { Component } from 'react';
import './Custom.css';
import { EntityMapping } from './EntityMapping';
import { ExportData } from './ExportData';
import { ResultGraph } from './ResultGraph';
import { UploadFile } from './UploadFile';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    toggleVisibility() {
        if (this.state.visibility = true) {
            this.setState = ({
                visibility: false
            });
        }
        else {
            this.setState = ({
                visibility: true
            })
        }
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    toggleContent() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    imageCLicked(e) {
        var test = document.getElementsByClassName(e.target.id)[0];
        test.scrollIntoView();
    }

    render() {
        return (
            <div className="offset-lg-2 mrgLeft">
                <div className="row">
                    <div className="col-lg-1 numericPane">
                        <div className="verticaProg"></div>
                        <div className="row">
                            <div className="col-lg-12 p35">
                                <div class="numberCircle nomargin" id="UploadFile" onClick={this.imageCLicked.bind(this)}>1</div>                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 p35">
                                <div class="numberCircle" id="EntityMapping" onClick={this.imageCLicked.bind(this)}>2</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 p35">
                                <div class="numberCircle" id="Export" onClick={this.imageCLicked.bind(this)}>3</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 p35">
                                <div class="numberCircle" id="ResultGraph" onClick={this.imageCLicked.bind(this)}>4</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 p35">
                                <div class="numberCircle" id="ResultGraph" onClick={this.imageCLicked.bind(this)}>5</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-11 rhtPane">
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
                </div>
            </div>
        );
    }
}