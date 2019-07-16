import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import * as fileLoader from '../utils/fileReader.js';
import * as textConstants from './textContent.js';
import ToolTip from 'react-portal-tooltip'
import './Form.css';
// import { loadFile } from '../utils/fileReader.js';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpeg|svg)$/));
const svgImages = importAll(require.context('./images/svg', false, /\.(png|jpeg|svg)$/));

const VerticallyCenteringContainer = ({children}) => (
  <div class="containerVerticallyAligning">
    {children}
  </div>
);

class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      issueDevice: 'Computer',
      issueTitle: '',
      issueType: 'Content',
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
      cycleType: 'Intro',
      isTooltipActive: {issueTitle: false,
                        issueType: false,
                        issueClassifications: false,
                        actionsPerformed: false,
                        expectedResult: false,
                        actualResult: false,
                        errorMessage: false,
                        additionalInfo: false,
                        screenshots: false,
                        videos: false,
                        logs: false,
                        charlesLogs: false}
    } 
  }

  showTooltip = (e) => {
    this.state.isTooltipActive[e.target.id.replace('Tooltip', '')] = true;
    this.setState({isTooltipActive: this.state.isTooltipActive});
  }

  hideTooltip = (e) => {
    this.state.isTooltipActive[e.target.id.replace('Tooltip', '')] = false;
    this.setState({isTooltipActive: this.state.isTooltipActive});
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
      case 'issueDevice':
        this.state.issueDevice = value;
        break;
      case 'issueTitle':
        if (this.state.issueDevice == 'Computer') {
          issueTitleValid = value.match(/^((Windows|Mac|MacOS|Linux|Ubuntu)+(\s{1}((?!-)\S)+){0,2}\s?-{1}\s?((?!\-)\S)+(((?!\-)\S)+\s?)+(-{1}\s?((?!\-)\S)+(((?!\-)\S)+\s{1}){2,}\S+))+$/i);  
        } else {
          issueTitleValid = value.match(/^(((?!(Windows|Mac|MacOS|Linux|Ubuntu))\S)+(\s{1}((?!-)\S)+){0,2}\s?-{1}\s?((?!\-)\S)+(((?!\-)\S)+\s?)+(-{1}\s?((?!\-)\S)+(((?!\-)\S)+\s{1}){2,}\S+))+$/i);
        }
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
        actionPerformedValid = value.match(/^(\d+\s?(\.|\)|-)+\s?[\S\s]*(https:\/\/\S{5,}).*(\n*\d+\s?(\.|\)|-)+\s?((?!observe|https:\/\/|www)\S+)+((?!observe|https:\/\/|www).)+){0,20})+$/g);
        // var containsObserve = value.match(/^.*(\n*.*)*(observe)+(\n*.*)*$/g);
        var containsObserve = value.indexOf('observe') !== -1 ? ' remove observe' : '';
        fieldValidationErrors.actionPerformed = actionPerformedValid ? '' : ' invalid'; 
        fieldValidationErrors.actionPerformed = fieldValidationErrors.actionPerformed + containsObserve;
        break;
      case 'expectedResult':
        expectedResultValid = value.match(/^(\d+\s?(\.|\)|-)*.*)+$/gm);
        // expectedResultValid = value.length >= 6;
        fieldValidationErrors.expectedResult = expectedResultValid ? 'Make sure it doesn\'t contain reproduction steps': '';
        break;
      case 'actualResult':
        actualResultValid = value.length >= 5;
        fieldValidationErrors.actualResultValid = actualResultValid ? '': ' is too short';
        break;
      case 'errorMessage':
        errorMessageValid = !value.match(/^(N\/A)+$/gm);
        fieldValidationErrors.errorMessage = errorMessageValid ? '': ' unnecessary content';
        break;
      case 'additionalInfo':
        additionalInfoValid = !value.match(/^(N\/A)+$/gm);
        fieldValidationErrors.additionalInfo = additionalInfoValid ? '': ' unnecessary content';
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

  renderChlsOrTxt(){
    if (this.state.cycleType == 'Charles') { 
      return <input class="form-control" type="file" accept=".chls"/>;
    } 
    else {
      return [
      <p class="alert alert-danger" style={{display: global.isCurrentLogValid ? 'block' : 'none' }}>Make sure to enable timestamps and preserve log</p>,
      <input class="form-control" type="file" id="txtLogInput" accept="text/plain"/>,
      <input class="btn btn-success" type="button" id="btnLoad" value="Validate the log file" onClick={fileLoader.loadFile.bind(this, "txtLogInput")}/>
      ];
    }
  }

  createMarkup(text) {
    return {__html: text};
  }
  renderTooltip(fieldName, imgName, className='', position='bottom', text='') {
    return [<img class={`tooltipIcon ${className}`} src={svgImages[`question.svg`]} id={`${fieldName}Tooltip`} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)} />,
          <ToolTip active={this.state.isTooltipActive[`${fieldName}`]} position={position} arrow="center" parent={`#${fieldName}Tooltip`}>
            <div>
              {text == '' ? <img style={{'width': '750px'}} src={images[imgName]} /> : (imgName != '' && text != '') ? 
              [<p style={{'width': '700px'}} dangerouslySetInnerHTML={this.createMarkup(text)}></p>,<center><img style={{'width': this.state.issueType == 'Content' ? '500px' : '300px'}} src={images[imgName]} /></center>]
              : <p style={{'width': '700px'}} dangerouslySetInnerHTML={this.createMarkup(text)}></p>}
            </div>
          </ToolTip>]
  }
  render () {
    return (
      <form className="demoForm">
        <div className="panel panel-default hidden">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className="form-group">
          <label class="control-label">Select your device</label><br/>
          <select class="selectpicker" name="issueDevice"
                  value={this.state.issueDevice}
                  onChange={this.handleUserInput}>
            <option>Computer</option>
            <option>Mobile</option>
          </select>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.issueTitle)}`}>
          <VerticallyCenteringContainer>
            <label class="control-label required" class="control-label required">Issue Title</label>
            {this.renderTooltip('issueTitle', '', 'tooltipNextToLabel', 'bottom', textConstants.ISSUE_TITLE)}
          </VerticallyCenteringContainer>
          <p class="alert alert-warning">Make sure: 
            <ul>
              <li>Description includes more than 3 words to be more descriptive</li>
              <li>{this.state.issueDevice == 'Computer' ? 'Сomputer\'s OS' : 'Device model'} is specified for the device</li>
            </ul>
          </p>
          <p class="alert alert-danger" style={{display: this.state.formErrors.issueTitle.length > 0 ? 'block' : 'none' }}>{this.state.formErrors.issueTitle}</p>
          <div style={{'display': 'flex'}}>
            <input placeholder={this.state.issueDevice == 'Computer' ? 'Windows 10 - Area of the app - Description of the issue' : 'Samsung A7 - Area of the app - Description of the issue' } 
              type="text" className="form-control is-invalid" name="issueTitle"
              value={this.state.issueTitle}
              onChange={this.handleUserInput}
              style={{'display': 'inline-block'}}/><img src={svgImages[this.state.issueTitleValid ? `thumbsup.svg` : `pencil.svg`]} style={{'margin-left': '8px', 'margin-right': '0px', 'display': 'inline-block'}} />
          </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.issueType)}`}>
          <VerticallyCenteringContainer> 
            <label class="control-label required">Type</label><br/>
            {this.renderTooltip('issueClassifications', '', 'tooltipNextToLabel', 'bottom', textConstants.ISSUE_CLASSIFICATIONS)}
          </VerticallyCenteringContainer>
          <p class="alert alert-warning">See the guide about bug types <a class="alert-link" href="https://www.utest.com/courses/bugs/what-is-a-bug">here</a></p>
          <VerticallyCenteringContainer>
            <select class="selectpicker" name="issueType"
                    value={this.state.issueType}
                    onChange={this.handleUserInput}>
              <option>Content</option>
              <option>Performance</option>
              <option>Visual</option>
              <option>Functional</option>
              <option>Crash</option>
            </select>
            {this.renderTooltip('issueType', `${this.state.issueType}Type.png`, '', 'bottom', textConstants.issueType(this.state.issueType))}
          </VerticallyCenteringContainer>
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
          <VerticallyCenteringContainer> 
            <label class="control-label required">Action Performed </label>
            {this.renderTooltip('actionsPerformed', '', 'tooltipNextToLabel', 'bottom', textConstants.ACTIONS_PERFORMED)}
            {this.state.actionPerformedValid && 
            <img src={svgImages[`thumbsup.svg`]} class="tooltipNextToLabel" style={{'margin-left': '8px', 'margin-right': '0px', 'display': 'inline-block'}} /> }
          </VerticallyCenteringContainer>
          <p class="alert alert-danger" style={{display: this.state.formErrors.actionPerformed.length > 0 ? 'block' : 'none' }}>Make sure it follows the requirements <a class="alert-link" href="https://www.utest.com/courses/bug-reports/information-fields"> here</a></p>
          <textarea placeholder="1. Make sure to include https:// url in the first step                                                             2. etc." 
            class="form-control rounded-0" id="ActionPerformedId" rows="4" name="actionPerformed"
              value={this.state.actionPerformed}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>

        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.expectedResult)}`}>
            <p class="alert alert-warning">Describe exactly <strong><em>what the user would expect to happen when carrying out the steps</em></strong> in the actions performed.</p>
            <p class="alert alert-danger" style={{display: this.state.formErrors.expectedResult.length > 0 ? 'block' : 'none' }}>{this.state.formErrors.expectedResult}</p>
            <textarea class="form-control rounded-0" id="ExpectedResultId" rows="4" name="expectedResult"
              value={this.state.expectedResult}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.actualResult)}`}>
            <p class="alert alert-warning">Describe exactly <strong><em>what does happen when the user carries out the steps</em></strong> in the actions performed.</p>
            <textarea class="form-control rounded-0" id="ActualResultId" rows="4" name="actualResult"
              value={this.state.actualResult}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.errorMessage)}`}>
            <VerticallyCenteringContainer>
              <label class="control-label">Error Message</label>
              {this.renderTooltip('errorMessage', '', 'tooltipNextToLabel', 'bottom', textConstants.ERROR_MESSAGE)}
            </VerticallyCenteringContainer>
            <p class="alert alert-warning">Leave it empty if there is nothing to add</p>
            <p class="alert alert-danger" style={{display: this.state.formErrors.errorMessage.length > 0 ? 'block' : 'none' }}>Leave the field blank if there is noting to add</p>
            <textarea class="form-control rounded-0" id="ErrorMessageId" rows="4" name="errorMessage"
              value={this.state.errorMessage}
              onChange={this.handleUserInput}
              onInput={this.superFNbecauseMSMakesIEsuckIntentionally}></textarea>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.additionalInfo)}`}>
            <VerticallyCenteringContainer>
              <label class="control-label">Additional Environment Info</label>
              {this.renderTooltip('additionalInfo', '', 'tooltipNextToLabel', 'bottom', textConstants.ADDITIONAL_INFO)}
            </VerticallyCenteringContainer>
            <p class="alert alert-warning">Leave it empty if there is nothing to add</p>
            <p class="alert alert-danger" style={{display: this.state.formErrors.additionalInfo.length > 0 ? 'block' : 'none' }}>Leave the field blank if there is noting to add</p>
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
            <VerticallyCenteringContainer>
              <label class="control-label required">Image</label>
              {this.renderTooltip('screenshots', '', 'tooltipNextToLabel', this.state.cycleType == 'Intro' ? 'top' : 'bottom', textConstants.SCREENSHOTS)}
            </VerticallyCenteringContainer>
            <label class="alert alert-warning">Image only in .jpg or .png format: 
              <a class="alert-link" href="https://www.utest.com/courses/creating-screenshots/creating-quality-screenshots"> more info</a>
            </label><input class="form-control" type="file" accept=".jpg, .png" /><br/>
          </div>
          <div style={{display: this.state.cycleType == 'Intro' ? 'none' : 'block' }} id="videoFile">
            <VerticallyCenteringContainer>
              <label class="control-label required">Video</label>
              {this.renderTooltip('videos', '', 'tooltipNextToLabel', 'bottom', textConstants.VIDEOS)}
            </VerticallyCenteringContainer>
            <label class="alert alert-warning">Video file only in .mp4 format (guide):  
              <ul>
                <li><a class="alert-link" href="https://www.utest.com/courses/creating-screen-recordings">capturing a screen recording</a></li>
                <li><a class="alert-link" href="https://www.utest.com/articles/using-handbrake-in-a-few-easy-steps">compressing a video to reduce size</a></li>
              </ul>
            </label><input class="form-control" type="file" accept=".mp4" /><br/>
          </div>
          <div style={{display: this.state.cycleType == 'Intro' ? 'none' : 'block' }} id="logFile">
            <VerticallyCenteringContainer>
              <label class="control-label required">Log</label>
              {this.renderTooltip('logs', '', 'tooltipNextToLabel', 'top', this.state.cycleType == 'Charles' ? textConstants.CHARLES_LOGS : textConstants.LOGS)}
            </VerticallyCenteringContainer>
            <label class="alert alert-warning">Log file only in .txt format (guide): 
              <ul>
                <li style={{display: this.state.cycleType == 'Charles' ? 'none' : 'list-item' }}><a class="alert-link" href="https://www.utest.com/courses/console-logs">capturing browser console logs</a></li>
                <li style={{display: this.state.cycleType == 'Charles' ? 'none' : 'list-item' }}><a class="alert-link" href="https://www.utest.com/courses/device-logs">capturing device logs</a></li>
                <li style={{display: this.state.cycleType == 'Charles' ? 'list-item' : 'none' }}><a class="alert-link" href="https://www.utest.com/courses/charles-proxy">charles Proxy Logs</a></li>
              </ul>
            </label>
            <br/>
            { this.renderChlsOrTxt() }
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