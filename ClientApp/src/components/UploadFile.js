import React, { Component } from 'react';
import './Custom.css';
import './Scrollbar.css';

export class UploadFile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4 className="margin-bottom-clearfix">Upload File</h4>
                <hr className="horizontal-line-style" />
                <div className="row">
                    <div className="col-lg-8">
                        <input className="btn btn-info btn-lg" type="file" multiple />
                        <label class="pb-1 margin-left-10 label-style">Supported formats: CSV, XLS, XLSX, TXT</label>
                    </div>
                    <div className="col-lg-4">
                        <div class="col mx-2">
                            <h5>List of uploaded files</h5>
                            <label for="sel2" className="label-style">Mutiple select list of uploaded files (hold shift to select more than one):</label>
                            
                                <select multiple class="form-control" id="sel2" name="sellist2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <button type="button" class="btn btn-secondary my-2">Remove files</button>
                            
                        </div>
                    </div>
                </div>
                <div className="row margin-top-10">
                    <div className="col-lg-2 offset-lg-10">
                        <button type="button" className="btn btn-secondary col-12">Next</button>
                    </div>
                </div>
            </div>
        );
    }
}