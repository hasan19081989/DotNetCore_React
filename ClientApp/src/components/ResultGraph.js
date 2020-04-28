import React, { Component } from 'react';
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
                    <Checkbox id={index + '-'+ appendWithId} onChange={this.checkBoxClickEvent.bind(this)} />
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
                <h5 className="margin-bottom-clearfix">Result Graph</h5>
                <hr className="horizontal-line-style" />
                <div className="row">
                    <div className="col-lg-3">
                        <div class="padding-clearfix">
                            <label class="pb-1 label-style">List of Result graph</label>
                            <ul class="list-group list-group-orientation">
                                {
                                    this.renderCheckbox('ResultGraph')
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <label class="pb-1 label-style">Result Graph</label>
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
        );
    }
}