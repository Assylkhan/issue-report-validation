export function loadFile(inputId, form) {
  var input = document.getElementById(inputId);
  var loader = new FileReader();
  loader.onload = function (loadEvent) {
    if (loadEvent.target.readyState != 2)
      return;
    if (loadEvent.target.error) {
      alert("Error while reading file " + input.files[0].name + ": " + loadEvent.target.error);
      return;
    }
    var isLogValid = '';
    if (form.state.browserName == 'Chrome' || 
        form.state.browserName == 'Firefox' ||
        form.state.browserName == 'Android Console Logs with Chrome' ||
        form.state.browserName == 'Chrome') {
      isLogValid = loadEvent.target.result.match(/(\d{2}:\d{2}:\d{2}\.\d{3}\s{1}Navigated to )/ig);
    } else if (form.state.browserName == 'iOS') {
      isLogValid = loadEvent.target.result.match(/(\d{2}:\d{2}:\d{2}.*)/ig);
    } else if (form.state.browserName == 'Android device log') {
      isLogValid = loadEvent.target.result.match(/(\d{2}:\d{2}:\d{2}.*)/ig);
    }
    var fieldValidationErrors = form.state.formErrors;
    fieldValidationErrors.textLog = isLogValid ? '' : 'invalid';
    form.setState({formErrors: fieldValidationErrors});
  };
  loader.readAsText(input.files[0]);
}

function loadFileOld(inputId) {
  var input, file, fr;
  console.log('hey');
  if (typeof window.FileReader !== 'function') {
      bodyAppend("p", "The file API isn't supported on this browser yet.");
      return;
  }

  input = document.getElementById(inputId);
  if (!input) {
      bodyAppend("p", "Um, couldn't find the fileinput element.");
  }
  else if (!input.files) {
      bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
  }
  else if (!input.files[0]) {
      bodyAppend("p", "Please select a file before clicking 'Load'");
  }
  else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
  }

  function receivedText() {
      showResult(fr, "Text");

      fr = new FileReader();
      fr.onload = receivedBinary;
      fr.readAsBinaryString(file);
  }

  function receivedBinary() {
      showResult(fr, "Binary");
  }
}

function binaryAgent(str) {
 return parseInt(str,2).toString(10);
}

function showResult(fr, label) {
  var markup, result, n, aByte, byteStr;

  markup = [];
  result = fr.result;
  for (n = 0; n < result.length; ++n) {
      aByte = result.charCodeAt(n);
      byteStr = aByte.toString(16);
      if (byteStr.length < 2) {
          byteStr = "0" + byteStr;
      }
      markup.push(byteStr);
  }
  bodyAppend("p", label + " (" + result.length + "):");
  console.log(binaryAgent(markup.join(" ")));
}

function bodyAppend(tagName, innerHTML) {
  // var elm;
  console.log(innerHTML);
  // elm = document.createElement(tagName);
  // elm.innerHTML = innerHTML;
  // document.body.appendChild(elm);
}