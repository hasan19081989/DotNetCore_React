import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';

export class ExportData extends Component {
    static displayName = ExportData.name;

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
                <div className="row">
                    <div class="col col-lg-2">
                        <div class="col ml-1">
                            <label class="pb-1">List of masked files</label>
                            <ul class="list-group">
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
                                        <input type="checkbox" class="custom-control-input" id="check3" checked />
                                        <label class="custom-control-label" for="check3">Check me</label>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="check4" checked />
                                        <label class="custom-control-label" for="check4">Check me</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-10">
                        <label class="pb-1">Verify masked data</label>
                        <div class="scrollbar scrollbar-entire">
                            <div class="force-overflow m-1">
                                The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[2] The Greek paragraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences. The hedera leaf (e.g. ☙) has also been used in the same way.Indented paragraphs demonstrated in the US Constitution
                    </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn float-left m-2 btn-outline-info">Back</button>
                <div className="row float-right">
                    <div className="col col-lg-8 mt-2">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                            <label class="custom-control-label" for="customCheck">Export Audit logs</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                            <label class="custom-control-label" for="customCheck">Update Database</label>
                        </div>
                    </div>
                    <div className="col col-lg-4 mt-2">
                        <button type="button" class="btn float-right btn-outline-info">Export</button>
                    </div>
                </div>
            </div >
        );
    }
}