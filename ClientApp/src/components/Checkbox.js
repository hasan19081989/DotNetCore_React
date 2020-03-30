import React, { Component } from 'react';

 const Checkbox = ({id, onChange}) => (
    <div class="custom-control custom-checkbox">
        <input id={id} key={id} type="checkbox" class="custom-control-input" onChange={e=> onChange(e)} />
        <label id={id} key={id} class="custom-control-label" for={id}>Check me</label>
    </div>
)

export default Checkbox;