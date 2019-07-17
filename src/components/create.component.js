// create.component.js

import React, { Component } from 'react';
import queryString from 'query-string';
import Form from '../forms/Form.js'

export default class Create extends Component {
	constructor (props) {
		super(props);
		this.visitsAmount = null;
		// this.handleLoad = this.handleLoad.bind(this);
		let url = this.props.location.search;
    let params = queryString.parse(url);
    // this.getVisitsAmount(params["role"]);
	}

	getVisitsAmount(role){
		let remoteURL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? `http://127.0.0.1:4000/api?role=${role}` : 
		`https://issue-report-validation-api.herokuapp.com/api?role=${role}`
    fetch(remoteURL)
      .then(response => response.json())
      .then(items => console.log(items))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h3 align="center">Issue report validation</h3>
        <Form />
      </div>
    )
  }

	// componentDidMount() {
	// 	window.addEventListener('load', this.handleLoad);
	// }

	// handleLoad() {
	// 	// const query = new URLSearchParams(this.props.location.search);
	// 	// const token = query.get('role');
	// 	// let params = queryString.parse(this.props);
	// 	// console.log(params);//123
	// 	console.log('token');//123
	// 	// $("myclass") //  $ is available here
	// }
}