import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';

export class ResultGraph extends Component {
    static displayName = ResultGraph.name;

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

    onSubmitPrevious = () => {
        this.props.history.push('/ExportData');
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-lg-2">
                        <div class="col mx-2">
                            <label class="pb-1">List of Result graph</label>
                            <ul class="list-group list-group-orientation">
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check1" checked />
                                        <label class="custom-control-label" for="check1">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check5" />
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check5" />
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check5" />
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check5" />
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check5" />
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check5" />
                                        <label class="custom-control-label" for="check5">Check me</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <label class="pb-1">Result Graph</label>
                        <div class="scrollbar scrollbar-entire">
                            <div class="force-overflow m-1"></div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={this.onSubmitPrevious} class="btn float-left m-2 btn-outline-info">Back</button>
            </div>
        );
    }
}