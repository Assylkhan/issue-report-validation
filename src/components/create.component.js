// create.component.js

import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Issue report validation</h3>
                <form>
                    <div className="form-group">
                        <label>Issue Title *</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Type *</label>
                        <select class="selectpicker">
						  <option>Content</option>
						  <option>Performance</option>
						  <option>Visual</option>
						  <option>Functional</option>
						  <option>Crash</option>
						</select>

                        <!-- // <input type="text" className="form-control"/> -->
                    </div>
                    <div className="form-group">
                        <label>Frequency *</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>

                    <div className="form-group">
                        <!-- // <input type="submit" value="Register Business" className="btn btn-primary"/> -->
                        <legend>FREQUENCY *</legend>
                        <div class="btn-group" data-toggle="buttons">
			                <label class="btn btn-default">
			                    <input type="radio" id="Fr1" name="frequency[1]" value="1" /> Every Time
			                </label> 
			                <label class="btn btn-default">
			                    <input type="radio" id="Fr2" name="frequency[2]" value="2" /> Hardly Ever
			                </label> 
			                <label class="btn btn-default">
			                    <input type="radio" id="Fr3" name="frequency[3]" value="3" /> Occasionally
			                </label> 
			                <label class="btn btn-default">
			                    <input type="radio" id="Fr4" name="frequency[4]" value="4" /> Once
			                </label> 
			            </div>
                    </div>

                    <div className="form-group">
                        <!-- // <input type="submit" value="Register Business" className="btn btn-primary"/> -->
                        <legend>PRIORITY *</legend>
                        <div class="btn-group" data-toggle="buttons">
			                <label class="btn btn-default">
			                    <input type="radio" id="Pr1" name="priority[1]" value="1" /> Low
			                </label> 
			                <label class="btn btn-default">
			                    <input type="radio" id="Pr2" name="priority[2]" value="2" /> Medium
			                </label> 
			                <label class="btn btn-default">
			                    <input type="radio" id="Pr3" name="priority[3]" value="3" /> High
			                </label> 
			                <label class="btn btn-default">
			                    <input type="radio" id="Pr4" name="priority[4]" value="4" /> Critical
			                </label> 
			            </div>
                    </div>

                    <div className="form-group">
                        <label>Action Performed *</label>
                        <textarea class="form-control rounded-0" id="ActionPerformed" rows="10"></textarea>
                    </div>
					<div className="form-group">
                        <label>Expected Result *</label>
                        <textarea class="form-control rounded-0" id="ExpectedResult" rows="10"></textarea>
                    </div>
					<div className="form-group">
                        <label>Actual Result *</label>
                        <textarea class="form-control rounded-0" id="ActualResult" rows="10"></textarea>
                    </div>
					<div className="form-group">
                        <label>Error Message *</label>
                        <textarea class="form-control rounded-0" id="ErrorMessage" rows="10"></textarea>
                    </div>
					<div className="form-group">
                        <label>Additional Environment Info *</label>
                        <textarea class="form-control rounded-0" id="AdditionalInfo" rows="10"></textarea>
                    </div>

                    <div className="form-group">
                    	<button type="button" class="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}