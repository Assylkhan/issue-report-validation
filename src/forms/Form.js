import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  var ua = window.navigator.userAgent;
  var isIE = !!ua.match(/MSIE|Trident/)

  constructor (props) {
    super(props);
    this.state = {
      issueTitle: '',
      issueType: '',
      formErrors: {issueTitle: '', issueType: ''},
      issueTitleValid: false,
      issueTypeValid: false,
      issueFrequencyValid: false,
      issuePriorityValid: false,
      actionPerformedValid: false,
      expectedResultValid: false,
      actualResultValid: false,
      errorMessageValid: false,
      additionalInfoValid: false,
      formValid: false
    }
  }

  // Radio Button Validation
  // copyright Stephen Chapman, 15th Nov 2004,14th Sep 2005
  // you may copy this function but please keep the copyright notice with it
  function valButton(btn) {
     var cnt = -1;
     for (var i=btn.length-1; i > -1; i--) {
         if (btn[i].checked) {cnt = i; i = -1;}
     }
     if (cnt > -1) return btn[cnt].value;
     else return null;
  }

  // var btn = valButton(form.group1);
  // if (btn == null) alert('No radio button selected');
  // else alert('Button value ' + btn + ' selected');

  superFNbecauseMSMakesIEsuckIntentionally = (e) => {
        if(isIE) // For Chrome, oninput works as expected
            handleUserInput(e);
    }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let issueTitleValid = this.state.issueTitleValid;
    let issueTypeValid = this.state.issueTypeValid;
    let issueFrequency= this.state.issueFrequency,
    let issuePriorityValid = this.state.issuePriorityValid,
    let actionPerformedValid = this.state.actionPerformedValid,
    let expectedResultValid = this.state.expectedResultValid,
    let actualResultValid = this.state.actualResultValid,
    let errorMessageValid = this.state.errorMessageValid,
    let additionalInfoValid = this.state.additionalInfoValid,

    switch(fieldName) {
      case 'issueTitle':
        issueTitleValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.issueTitle = issueTitleValid ? '' : ' is invalid';
        break;
      case 'issueType':
        issueTypeValid = value.length >= 3;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';
        break;
      case 'issueFrequency':
        // issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = ''+value;
        break;
      case 'issuePriority':
        // issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = ''+value;
        break;
      case 'actionPerformed':
        /*issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';*/
        break;
      case 'expectedResult':
        /*issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';*/
        break;
      case 'actualResult':
        actualResultValid = value.length >= 3;
        fieldValidationErrors.issueType = actualResultValid ? '': ' is too short';
        break;
      case 'errorMessage':
        /*issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';*/
        break;
      case 'additionalInfo':
        /*issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';*/
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    issueTitleValid: issueTitleValid,
                    issueTypeValid: issueTypeValid,
                    actualResultValid: actualResultValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.issueTitleValid && this.state.issueTypeValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
          <label class="control-label required" class="control-label required">Issue Title</label>
          <input type="text" className="form-control" name="issueTitle"
            value={this.state.issueType}
            onChange={this.handleUserInput}/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
          <label class="control-label required">Type</label><br/>
          <select class="selectpicker" name="issueType"
                  value={this.state.issueType}
                  onChange={this.handleUserInput}>
            <option>Content</option>
            <option>Performance</option>
            <option>Visual</option>
            <option>Functional</option>
            <option>Crash</option>
          </select>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
          <label class="control-label required">FREQUENCY</label>
          <div class="btn-group" data-toggle="buttons">
            <label class="btn btn-default">
                <input type="radio" id="Fr1" name="issueFrequency" value="1" /> Every Time
            </label> 
            <label class="btn btn-default">
                <input type="radio" id="Fr2" name="issueFrequency" value="2" /> Hardly Ever
            </label> 
            <label class="btn btn-default">
                <input type="radio" id="Fr3" name="issueFrequency" value="3" /> Occasionally
            </label> 
            <label class="btn btn-default">
                <input type="radio" id="Fr4" name="issueFrequency" value="4" /> Once
            </label> 
          </div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
          <label class="control-label required">PRIORITY</label>
          <div class="btn-group" data-toggle="buttons">
            <label class="btn btn-default">
                <input type="radio" id="Pr1" name="issuePriority" value="1" /> Low
            </label> 
            <label class="btn btn-default">
                <input type="radio" id="Pr2" name="issuePriority" value="2" /> Medium
            </label> 
            <label class="btn btn-default">
                <input type="radio" id="Pr3" name="issuePriority" value="3" /> High
            </label> 
            <label class="btn btn-default">
                <input type="radio" id="Pr4" name="issuePriority" value="4" /> Critical
            </label> 
          </div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
            <label class="control-label required">Action Performed </label>
            <textarea class="form-control rounded-0" id="ActionPerformed" rows="4" name="actionPerformed"></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
            <label class="control-label required">Expected Result</label>
            <textarea class="form-control rounded-0" id="ExpectedResult" rows="4" name="expectedResult"></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
            <label class="control-label required">Actual Result </label>
            <textarea class="form-control rounded-0" id="ActualResult" rows="4" name="actualResult"></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
            <label class="control-label required">Error Message </label>
            <textarea class="form-control rounded-0" id="ErrorMessage" rows="4" name="errorMessage"></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
            <label class="control-label required">Additional Environment Info </label>
            <textarea class="form-control rounded-0" id="AdditionalInfo" rows="4" name="additionalInfo"></textarea>
        </div>

        <div className="form-group">
          <button type="button" class="btn btn-success" disabled={!this.state.formValid}>Submit</button>
        </div>



      </form>
    )
  }
}

export default Form;