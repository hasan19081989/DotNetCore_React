import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';
import Checkbox from './Checkbox';

export class EntityMapping extends Component {

    constructor(props) {
        super(props);
    }

    renderCheckbox(appendWithId) {
        let arr = [];
        for (let index = 1; index < 5; index++) {
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
                <h5 className="margin-bottom-clearfix">Content 2 - Enitity Mapping</h5>
                <hr className="horizontal-line-style" />
                <div className="row">
                    <div class="col-lg-3">
                        <label className="label-style" for="sel2">Mutiple select list of uploaded files (hold shift to select more than one):</label>
                        <select multiple class="form-control" id="sel2" name="sellist2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button type="button" class="btn btn-secondary margin-top-10">Remove files</button>
                    </div>
                    <div class="col-lg-3">
                        <button type="button" class="btn btn-secondary">Select All</button>
                        <div className="margin-top-5">
                            <ul class="list-group list-group-orientation mb-1">
                                {
                                    this.renderCheckbox('EntityMapping')
                                }
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div>
                            <h5>Standard Masking</h5>
                            <ul class="list-group list-group-orientation">
                                {
                                    this.renderCheckbox('StandardMasking')
                                }
                            </ul>
                            <button type="button" class="btn float-left m-2 btn-secondary margin-left-clearfix col-lg-5">Remove</button>
                            <button type="button" class="btn float-right m-2 btn-secondary margin-right-clearfix col-lg-5">Add</button>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h5>Custom Masking</h5>
                        <ul class="list-group list-group-orientation">
                            {
                                this.renderCheckbox('CustomMasking')
                            }
                        </ul>
                    </div>
                </div>
                <div className="row margin-top-20">
                    <div className="col-lg-12">
                        <button type="button" class="btn float-left btn-secondary col-lg-2">Back</button>
                        <button type="button" class="btn float-right btn-primary col-lg-2">Next</button>
                    </div>
                </div>
            </div>
        );
    }
}