// create.component.js

import React, { Component } from 'react';
import Form from '../forms/Form.js'

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Issue report validation</h3>
                <Form />
            </div>
        )
    }
}