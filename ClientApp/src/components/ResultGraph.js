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

    renderCheckbox(){
        let arr = [];
        for (let index = 1; index < 8; index++) {
            arr.push(
                <li class="list-group-item">
                    <div class="custom-control custom-checkbox">
                        <input id={index+'ID'} key={index+'key'} type="checkbox" class="custom-control-input" id="check1" checked />
                        <label id={index+'ID'} key={index+'key'} class="custom-control-label" for={index+'ID'}>Check me</label>
                    </div>
                </li>
            );
        }
        return arr;
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-lg-3">
                        <div class="padding-clearfix">
                            <label class="pb-1 label-style">List of Result graph</label>
                            <ul class="list-group list-group-orientation">
                                {
                                    this.renderCheckbox()
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