﻿import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './Custom.css';


export class ResultGraph extends Component {
    static displayName = ResultGraph.name;

    constructor(props) {
        super(props);
    }

    renderCheckbox(appendWithId) {
        let arr = [];
        for (let index = 1; index < 8; index++) {
            arr.push(
                <li class="list-group-item">
                    <Checkbox id={index + '-' + appendWithId} onChange={this.checkBoxClickEvent.bind(this)} />
                </li>
            );
        }
        return arr;
    }

    checkBoxClickEvent(event) {
        console.log(event);
    }

    render() {
        return (
            <div className="">
                <div className="card-header">
                    <h4 className="margin-bottom-clearfix">Result Graph</h4>
                </div>
                <div className="ResultGraphDiv">
                    <div className="row">
                        <div className="col-lg-3">
                            <div class="padding-clearfix">
                                {/* <label class="pb-1 label-style">List of Result graph</label> */}
                                <h6>List of Result graph</h6>
                                <ul class="list-group list-group-orientation">
                                    {
                                        this.renderCheckbox('ResultGraph')
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* <label class="pb-1 label-style">Result Graph</label> */}
                            <h6>Result Graph</h6>
                            <div class="scrollbar scrollbar-entire">
                                <div class="force-overflow m-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="col-lg-12">
                            <button type="button" class="btn float-left btn-secondary col-lg-2">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}