import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';
import './Spa_Main.css';
import { ResultGraph } from './ResultGraph';
import { ExportData } from './ExportData';
import { EntityMapping } from './EntityMapping';
import { UploadFile } from './UploadFile';

export class Spa_Main extends Component {
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

    imageCLicked(e){
        var test = document.getElementsByClassName(e.target.id)[0];
        test.scrollIntoView();
    }

    render() {
        return (
            <div className="offset-lg-2">
                <div className="row">
                    <div className="col-lg-2" style={{border:"2px solid black", borderRadius:"5px", marginTop:"10px", boxShadow:"2px 2px 2px 2px #ACACAC", height:"fit-content"}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <img id="UploadFile" src="../../Images/divOne.jpg" style={{width:"50px", height:"50px"}} onClick={this.imageCLicked.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <img id="EntityMapping" src="../../Images/divOne.jpg" style={{width:"50px", height:"50px"}} onClick={this.imageCLicked.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <img id="Export" src="../../Images/divOne.jpg" style={{width:"50px", height:"50px"}} onClick={this.imageCLicked.bind(this)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <img id="ResultGraph" src="../../Images/divOne.jpg" style={{width:"50px", height:"50px"}} onClick={this.imageCLicked.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
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