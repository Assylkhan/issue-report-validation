import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      issueTitle: '',
      issueType: '',
      issueFrequency: '',
      issuePriority: '',
      actionPerformed: '',
      expectedResult: '',
      actualResult: '',
      errorMessage: '',
      additionalInfo: '',
      formErrors: {issueTitle: '', issueType: '', issueFrequency: '',
                  issuePriority: '', actionPerformed: '',
                  expectedResult: '', actualResult: '',
                  errorMessage: '', additionalInfo: ''},
      issueTitleValid: false,
      issueTypeValid: false,
      issueFrequencyValid: false,
      issuePriorityValid: false,
      actionPerformedValid: false,
      expectedResultValid: false,
      actualResultValid: false,
      errorMessageValid: false,
      additionalInfoValid: false,
      formValid: false,
      cycleType: 'Intro'
    }
  }

  // Radio Button Validation
  // copyright Stephen Chapman, 15th Nov 2004,14th Sep 2005
  // you may copy this function but please keep the copyright notice with it
  valButton(btn) {
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

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  superFNbecauseMSMakesIEsuckIntentionally = (e) => {
    var isIE = /*@cc_on!@*/false;
    if(isIE) // For Chrome, oninput works as expected
    this.handleUserInput(e);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let issueTitleValid = this.state.issueTitleValid;
    let issueTypeValid = this.state.issueTypeValid;
    let issueFrequencyValid= this.state.issueFrequencyValid;
    let issuePriorityValid = this.state.issuePriorityValid;
    let actionPerformedValid = this.state.actionPerformedValid;
    let expectedResultValid = this.state.expectedResultValid;
    let actualResultValid = this.state.actualResultValid;
    let errorMessageValid = this.state.errorMessageValid;
    let additionalInfoValid = this.state.additionalInfoValid;
    var cycleType = this.state.cycleType;

    switch(fieldName) {
      case 'issueTitle':
        issueTitleValid = value.match(/^[\S]+[\S\s]+-[\s]*[\S]+[\S\s]+-[\s]*[\S]+[\S\s]+$/i);
        fieldValidationErrors.issueTitle = issueTitleValid ? '' : ' Title has to follow the required format';
        break;
      case 'issueType':
        // issueTypeValid = value.length >= 3;
        // fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';
        break;
      case 'issueFrequency':
        // issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueFrequency = value;
        break;
      case 'issuePriority':
        // issueTypeValid = value.length >= 6;
        fieldValidationErrors.issuePriority = value;
        break;
      case 'actionPerformed':
        actionPerformedValid = value.match(/^(\d+\s?(\.|\)|-)+\s?\S*(https:\/\/).*(\n*\d+\s?(\.|\)|-)+\s?((?!observe)\S+.)+){0,20})+$/g);
        // var containsObserve = value.match(/^.*(\n*.*)*(observe)+(\n*.*)*$/g);
        var containsObserve = value.indexOf('observe') !== -1 ? ' remove observe' : '';
        fieldValidationErrors.actionPerformed = actionPerformedValid ? '' : ' invalid'; 
        fieldValidationErrors.actionPerformed = fieldValidationErrors.actionPerformed + containsObserve;
        break;
      case 'expectedResult':
        expectedResultValid = value.match(/^(\d+\s?(\.|\)|-)*.*)+$/gm);
        // expectedResultValid = value.length >= 6;
        fieldValidationErrors.expectedResult = expectedResultValid ? 'make sure it doesn\'t contain reproduction steps': '';
        break;
      case 'actualResult':
        actualResultValid = value.length >= 5;
        fieldValidationErrors.actualResultValid = actualResultValid ? '': ' is too short';
        break;
      case 'errorMessage':
        /*issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';*/
        break;
      case 'additionalInfo':
        /*issueTypeValid = value.length >= 6;
        fieldValidationErrors.issueType = issueTypeValid ? '': ' is too short';*/
        break;
      case 'cycleType':
        switch(value) {
          case 'Introduction to Testing':
            cycleType = 'Intro';
            break;
          case 'Computers & Mobile & Challeng':
            cycleType = 'Comp';
            break;
          case 'Charles':
            cycleType = "Charles";
            break;
          default: break;
        }
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    issueTitleValid: issueTitleValid,
                    issueTypeValid: issueTypeValid,
                    issueFrequencyValid: issueFrequencyValid,
                    issuePriorityValid: issuePriorityValid,
                    actionPerformedValid: actionPerformedValid,
                    expectedResultValid: expectedResultValid,
                    actualResultValid: actualResultValid,
                    errorMessageValid: errorMessageValid,
                    additionalInfoValid: additionalInfoValid,
                    formValid: this.state.formValid,
                    cycleType: cycleType
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.issueTitleValid && this.state.issueTypeValid
                  && this.state.issueFrequencyValid && this.state.issuePriorityValid 
                  && this.state.actionPerformedValid && this.state.expectedResultValid
                  && this.state.actualResultValid && this.state.errorMessageValid 
                  && this.state.additionalInfoValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  displayType(error) {
   return(error.length === 0 ? 'display: none' : 'display: block'); 
  }

  render () {
    return (
      <form className="demoForm">
        <div className="panel panel-default hidden">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
          <label class="control-label required" class="control-label required">Issue Title</label>
          <p class="alert alert-danger" style={{display: this.state.formErrors.issueTitle.length > 0 ? 'block' : 'none' }}>{this.state.formErrors.issueTitle}</p>
          <input placeholder="Samsung A7/ Windows 10 - Area of the app - Description of the issue" type="text" className="form-control" name="issueTitle"
            value={this.state.issueTitle}
            onChange={this.handleUserInput}/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueType)}`}>
          <label class="control-label required">Type</label><br/>
          <p class="alert alert-warning">See the guide about bug types <a class="alert-link" href="https://www.utest.com/courses/bugs/what-is-a-bug">here</a></p>
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
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueFrequency)}`}>
          <label class="control-label required">FREQUENCY</label><br/>
          <div class="btn-group" data-toggle="buttons">
            <label class="">
                <input type="radio" id="Fr1" name="issueFrequency" value="1"
                  value={this.state.issueFrequency}
                  onChange={this.handleUserInput} /> Every Time
            </label> 
            <label class="">
                <input type="radio" id="Fr2" name="issueFrequency" value="2"
                  value={this.state.issueFrequency}
                  onChange={this.handleUserInput} /> Hardly Ever
            </label> 
            <label class="">
                <input type="radio" id="Fr3" name="issueFrequency" value="3" 
                  value={this.state.issueFrequency}
                  onChange={this.handleUserInput} /> Occasionally
            </label> 
            <label class="">
                <input type="radio" id="Fr4" name="issueFrequency" value="4" 
                  value={this.state.issueFrequency}
                  onChange={this.handleUserInput} /> Once
            </label>
          </div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.issuePriority)}`}>
          <label class="control-label required">PRIORITY</label><br/>
          <p class="alert alert-warning">Choose the priority fairly to help check your issue quicker, it does not affect the issues final value</p>
          <div class="btn-group" data-toggle="buttons">
            <label class="">
                <input type="radio" id="Pr1" name="issuePriority" value="1"
                  value={this.state.issuePriority}
                  onChange={this.handleUserInput} /> Low
            </label> 
            <label class="">
                <input type="radio" id="Pr2" name="issuePriority" value="2"
                  value={this.state.issuePriority}
                  onChange={this.handleUserInput} /> Medium
            </label> 
            <label class="">
                <input type="radio" id="Pr3" name="issuePriority" value="3"
                  value={this.state.issuePriority}
                  onChange={this.handleUserInput} /> High
            </label> 
            <label class="">
                <input type="radio" id="Pr4" name="issuePriority" value="4"
                  value={this.state.issuePriority}
                  onChange={this.handleUserInput} /> Critical
            </label>
          </div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.actionPerformed)}`}>
            <label class="control-label required">Action Performed </label>
            <p class="alert alert-danger" style={{display: this.state.formErrors.actionPerformed.length > 0 ? 'block' : 'none' }}>Make sure it follows the requirements <a class="alert-link" href="https://www.utest.com/courses/bug-reports/information-fields"> here</a></p>
            <textarea placeholder="1. Make sure to include https:// url in the first step                                                             2. etc." 
            class="form-control rounded-0" id="ActionPerformedId" rows="4" name="actionPerformed"
              value={this.state.actionPerformed}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.expectedResult)}`}>
            <label class="control-label required">Expected Result</label>
            <p class="alert alert-danger" style={{display: this.state.formErrors.expectedResult.length > 0 ? 'block' : 'none' }}>{this.state.formErrors.expectedResult}</p>
            <p class="alert alert-warning">Describe exactly what the user would expect to happen when carrying out the steps in the actions performed.</p>
            <textarea class="form-control rounded-0" id="ExpectedResultId" rows="4" name="expectedResult"
              value={this.state.expectedResult}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.actualResult)}`}>
            <label class="control-label required">Actual Result </label>
            <p class="alert alert-warning">Describe exactly what does happen when the user carries out the steps in the actions performed.</p>
            <textarea class="form-control rounded-0" id="ActualResultId" rows="4" name="actualResult"
              value={this.state.actualResult}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.errorMessage)}`}>
            <label class="control-label">Error Message </label>
            <p class="alert alert-warning">Leave it empty if there is nothing to add</p>
            <textarea class="form-control rounded-0" id="ErrorMessageId" rows="4" name="errorMessage"
              value={this.state.errorMessage}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.additionalInfo)}`}>
            <label class="control-label">Additional Environment Info </label>
            <p class="alert alert-warning">Leave it empty if there is nothing to add</p>
            <textarea class="form-control rounded-0" id="AdditionalInfoId" rows="4" name="additionalInfo"
              value={this.state.additionalInfo}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <br/>
        <hr/>
        <br/>
        <h5>Attachments</h5>
        <br/>
        <div className="form-group">
          <label class="control-label">Select Academy cycle</label><br/>
          <select class="selectpicker" name="cycleType"
                  value={this.state.cycleType}
                  onChange={this.handleUserInput}>
            <option>Introduction to Testing</option>
            <option>Computers & Mobile & Challenge</option>
            <option>Charles</option>
          </select>
        </div>

        
        <div>
          <div id="imageFile">
            <label class="control-label required">Image</label><br/>
            <label class="alert alert-warning">Image only in .jpg or .png format: 
              <a class="alert-link" href="https://www.utest.com/courses/creating-screenshots/creating-quality-screenshots"> more info</a>
            </label><input class="form-control" type="file" accept=".jpg, .png" /><br/>
          </div>
          <div style={{display: this.state.cycleType == 'Intro' ? 'none' : 'block' }} id="videoFile">
            <label class="control-label">Video</label><br/>
            <label class="alert alert-warning">Video file only in .mp4 format (guide):  
              <ul>
                <li><a class="alert-link" href="https://www.utest.com/courses/creating-screen-recordings">capturing a screen recording</a></li>
                <li><a class="alert-link" href="https://www.utest.com/articles/using-handbrake-in-a-few-easy-steps">compressing a video to reduce size</a></li>
              </ul>
            </label><input class="form-control" type="file" accept=".mp4" /><br/>
          </div>
          <div style={{display: this.state.cycleType == 'Intro' ? 'none' : 'block' }} id="logFile">
            <label class="control-label">Log</label><br/>
            <label class="alert alert-warning">Log file only in .txt format (guide): 
              <ul>
                <li style={{display: this.state.cycleType == 'Charles' ? 'none' : 'list-item' }}><a class="alert-link" href="https://www.utest.com/courses/console-logs">capturing browser console logs</a></li>
                <li style={{display: this.state.cycleType == 'Charles' ? 'none' : 'list-item' }}><a class="alert-link" href="https://www.utest.com/courses/device-logs">capturing device logs</a></li>
                <li style={{display: this.state.cycleType == 'Charles' ? 'list-item' : 'none' }}><a class="alert-link" href="https://www.utest.com/courses/charles-proxy">charles Proxy Logs</a></li>
              </ul>
            </label>
            {this.state.cycleType == 'Charles' ? <input class="form-control" type="file" accept=".chls"/> : <input class="form-control" type="file" accept="text/plain"/>}
            <br/>
          </div>
        </div>
        <br/>
        <div className="form-group hidden">
          <button type="button" class="btn btn-success" disabled={!this.state.formValid}>Submit</button>
        </div>



      </form>
    )
  }
}

export default Form;