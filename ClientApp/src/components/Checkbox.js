import React, { Component } from 'react';

const Checkbox = ({id, checked, onChange}) => (
    <div class="custom-control custom-checkbox">
        <input key={id+'-checkbox'} id={id} type="checkbox" checked={checked} onChange={onChange} />
        <label key={id+'-checkbox'} for={id}>Check me</label>
    </div>
)

export default Checkbox;