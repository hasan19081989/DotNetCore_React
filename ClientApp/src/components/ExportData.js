import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './Custom.css';


export class ExportData extends Component {
    static displayName = ExportData.name;

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
                <div className="row">
                    <div class="col col-lg-3">
                        <div class="col ml-1 padding-horizontal-clearfix">
                            <label class="pb-1 label-style">List of masked files</label>
                            <ul class="list-group">
                                {
                                    this.renderCheckbox('ExportData')
                                }
                            </ul>
                        </div>
                        <div className="col-lg-12 padding-all-5">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" name="example1" />
                                <label class="custom-control-label" for="customCheck1">Export Audit logs</label>
                            </div>
                            <div class="custom-control custom-checkbox margin-top-5">
                                <input type="checkbox" class="custom-control-input" id="customCheck2" name="example1" />
                                <label class="custom-control-label" for="customCheck2">Update Database</label>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-9">
                        <label class="pb-1 label-style">Verify masked data</label>
                        <div class="scrollbar scrollbar-entire">
                            <div class="force-overflow m-1">
                                The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[2] The Greek paragraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences. The hedera leaf (e.g. ☙) has also been used in the same way.Indented paragraphs demonstrated in the US Constitution
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row margin-top-20">
                    <div className="col-lg-12">
                        <button type="button" class="btn float-left btn-secondary col-lg-2">Back</button>
                        <button type="button" class="btn float-right btn-primary col-lg-2">Export</button>
                    </div>
                </div>
            </div >
        );
    }
}