import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';

export class EntityMapping extends Component {
    static displayName = EntityMapping.name;

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
            <div className="">
                <h5> Content 2 - Enitity Mapping</h5>
                <div className="container">
                    <div className="row">
                        <div class="col mx-1">
                            <label for="sel2">Mutiple select list of uploaded files (hold shift to select more than one):</label>
                            <select multiple class="form-control" id="sel2" name="sellist2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <button type="button" class="btn btn-outline-secondary my-2">Remove files</button>
                        </div>
                        <div class="col mx-1">
                            <button type="button" class="btn btn-outline-secondary my-2">Select All</button>
                            <ul class="list-group list-group-orientation mb-1">
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check1" checked />
                                        <label class="custom-control-label" for="check1">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check2" />
                                        <label class="custom-control-label" for="check2">Check me</label>
                                    </div>
                                </li>
                                    <li class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="check1" checked />
                                            <label class="custom-control-label" for="check1">Check me</label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="check2" />
                                            <label class="custom-control-label" for="check2">Check me</label>
                                        </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col mx-1">
                            <h5>Standard Masking</h5>
                            <ul class="list-group list-group-orientation">
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check1">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col col-lg-1 mt-3">
                            <button type="button" class="btn btn-outline-secondary mb-1">Add</button>
                            <button type="button" class="btn btn-outline-secondary mt-1">Remove</button>
                        </div>
                        <div class="col mx-1">
                            <h5>Custom Masking</h5>
                            <ul class="list-group list-group-orientation">
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check1">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn float-left m-2 btn-outline-info">Back</button>
                <button type="button" class="btn float-right m-2 btn-outline-info">Next</button>
            </div >
        );
    }
}