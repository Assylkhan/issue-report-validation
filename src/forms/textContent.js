export const ISSUE_TITLE = "<h4>1. Issue Title</h4>"
                +"<p>Describe what issue (bug) is being reported in the title. The bug title must "
                +"match the format listed in the cycle overview. Read the cycle overview before submitting any bug reports.</p>"
                +"<ul>"
                +"<li><strong>1.1</strong> Write the bug title by following the required format in the cycle overview</li>"
                +"<li><strong>1.2</strong> Describe the area the bug was found in the app (Examples: Search, My Profile, Checkout)</li>"
                +"<li><strong>1.3</strong> Describe the bug that is being reported accurately (Example: The app crashes after a photo is uploaded)</li>"
                +"<li><strong>1.4</strong> Verify the bug has not already been reported by another tester when participating in a paid cycle</li>"
                +"<li><strong>1.5</strong> Do not write the title in ALL CAPS</li>"
                +"<li><strong>1.6</strong> Do not write the browser name in the title (Unless specifically instructed to in the overview)</li>"
                +"<li><strong>2.3</strong> Device and environment: Must be selected correctly and match the title</li>"
                +"</ul>";
export const ISSUE_CLASSIFICATIONS = "<h4>2. Issue Classifications</h4>"
																		+"<p>Select the correct bug classifications to explain what type of bug is being reported, how often it occurs, what environments were used and the impact of the bug to the user.</p>"
																		+"<ul>"
																		+"<li><strong>2.1</strong> Issue Type: Functional, Visual, Content, Performance or Crash</li>"
																		+"<li><strong>2.2</strong> Frequency: Every Time, Hardly ever, Occasionally or Once</li>"
																		+"<li><strong>2.3</strong> Device and environment: Must be selected correctly and match the title</li>"
																		+"<li><strong>2.4</strong> Severity: Critical, High, Medium, Low</li></ul>";
export const ACTIONS_PERFORMED = "<h4>3. Actions Performed</h4>"
																+"<p>Describe how to reproduce the bug by writing numbered steps in the actions performed field.</p>"
																+"<ul>"
																+"<li><strong>3.1</strong> Use numbered steps to show how to recreate the bug</li>"
																+"<li><strong>3.2</strong> Write only one task on each step</li>"
																+"<li><strong>3.3</strong> Begin the numbered steps from the URL of the website or opening the app</li>"
																+"<li><strong>3.4</strong> Do not write \"observe, check, or view result\" in the numbered steps</li>"
																+"<li><strong>3.5</strong> Do not write the expected or actual results in the numbered steps</li>"
																+"<li><strong>3.6</strong> Do not write the URL in the following steps (include the URL in the first step only)</li></ul>";
export const EXPECTED_RESULTS = "<h4>4. Expected Results</h4>"
																+"<p>Describe exactly <strong><em>what the user would expect to happen when carrying out the steps</em></strong> in the actions performed.</p>";
export const ACTUAL_RESULTS = "<h4>5. Actual Results</h4>"
																+"<p>Describe exactly <strong><em>what does happen when the user carries out the steps</em></strong> in the actions performed.</p>";
export const ERROR_MESSAGE = "<h4>6. Error Message</h4>"
														+"<p>Only use this field if there is an error message when recreating the bug. Write the full error message that is displayed on the screen <strong><em>if the bug results in an error message.</em></strong></p>";
export const ADDITIONAL_INFO = "<h4>Optional - Additional Environment Information</h4>"
															+"<p>The additional environment field may contain information about the devices and environments that are affected by this bug. It is not always required, check the cycle overview to see if this is a requirement.</p>";
export const SCREENSHOTS = "<h4>7. Screenshots</h4>"
													+"<p>Include a screenshot with every bug report and clearly highlight the bug as it appears on the screen.</p>"
													+"<ul>"
													+"<li><strong>7.1</strong> Add a red or yellow square, circle or arrow to highlight where the bug appears (do not use a mouse drawing tool)</li>"
													+"<li><strong>7.2</strong> Upload in .jpg or .png format</li>"
													+"<li><strong>7.3</strong> Capture the entire screen (Including the URL bar for web testing)</li>"
													+"<li><strong>7.4</strong> Verify that the screenshot can be opened inside the platform after submitting the report</li>"
													+"<li><strong>7.5</strong> Do not upload more than 2 screenshots per bug report</li></ul>";
export const VIDEOS = "<h4>8. Videos</h4>"
													+"<p>Include a video showing all the steps required to recreate the bug. The video needs to match the steps listed in the actions performed.</p>"
													+"<ul>"
													+"<li><strong>8.1</strong> Upload videos in .MP4 format</li>"
													+"<li><strong>8.2</strong> The video needs to match the steps listed in the actions performed </li>"
													+"<li><strong>8.3</strong> Show the entire screen (Including the URL bar for web testing)</li>"
													+"<li><strong>8.4</strong> Mute the microphone to exclude background noise (Unless narrating is required)</li>"
													+"<li><strong>8.5</strong> Verify that the video can be played inside the platform after submitting the report</li>"
													+"<li><strong>8.6</strong> The bug being reported must appear in the video</li>"
													+"<li><strong>8.7</strong> Do not record a computer screen with a mobile phone, use software to record the video</li>"
													+"<li><strong>8.8</strong> Do not include more than one video in issue reports (show the issue recreation steps in 1 video)</li></ul>";
export const LOGS = "<h4>9. Computer & Mobile Logs</h4>"
										+"<p>Include a device log or a console log with every bug report.</p>"
										+"<ul>"
										+"<li><strong>9.1</strong> Save logs in .txt format (Charles logs need to be saved in .chls format)</li>"
										+"<li><strong>9.2</strong> Verify the test URL is visible in the data entry lines in the log</li>"
										+"<li><strong>9.3</strong> Enable \"Preserve <strong>or</strong> Persist log and Show Timestamp\" in Chrome and Firefox</li>"
										+"<li><strong>9.4</strong> Click the links below to learn how to capture logs</li></ul>";
export const CHARLES_LOGS = "<h4>10. Charles Proxy Logs</h4>"
														+"<p>Include a decrypted Charles proxy log with every bug report when requested.</p>"
														+"<ul>"
														+"<li><strong>10.1</strong> All data must be decrypted in Charles logs (Only access the test website when collecting Charles logs)</li>"
														+"<li><strong>10.2</strong> The root certificate must be installed correctly on the computer and mobile device (If the certificate wasn't installed correctly, the expanded items will show an &lt; unknown &gt; message)</li>"
														+"<li><strong>10.3</strong> Configure the required SSL settings (host * and port 443)</li>"
														+"<li><strong>10.4</strong> Upload the entire Charles log. After reproducing the issue, click on file, then click 'save session as.' </li>"
														+"<li><strong>10.5</strong> Verify the test website URL is visible in the data entry lines of the Charles log</li></ul>";
export const FUNCTIONAL_TYPE = "<h4><strong>1. Functional</strong></h4>"
															+"<p>Functional issues are workflow failures where something in the test application did not work as it was design to. These issues produce an unexpected or illogical application behavior where the end result differs from the expected result.</p>"
															+"<p><strong>Examples:</strong></p>"
															+"<ul>"
															+"<li>Broken page links</li>"
															+"<li>Search and filters return incorrect results</li>"
															+"<li>Button does not respond when clicked</li>"
															+"</ul>";
export const VISUAL_TYPE = "<h4><strong>2. Visual</strong></h4>"
													+"<p>Visual issues affect the layout and cause user interface distortion such as missing elements or images on a page.</p>"
													+"<p><strong>Examples:</strong></p>"
													+"<ul>"
													+"<li>Page elements or content is misaligned</li>"
													+"<li>Content does not fit the area it is in</li>"
													+"<li>Inconsistent colors on a link, button or menu</li>"
													+"<li>Picture is missing</li>"
													+"</ul>";
export const CONTENT_TYPE = "<h4><strong>3. Content</strong></h4>"
														+"<p>Content issues affect the text of a page, such as spelling, grammar and localization errors.</p>"
														+"<p><strong>Examples:</strong></p>"
														+"<ul>"
														+"<li>Localization issues where the wrong word is used in page translations</li>"
														+"<li>Spelling and capitalization errors such as uTEsT</li>"
														+"<li>Punctuation is used incorrectly in text ( , . : ; ' \" )</li>"
														+"</ul>";
export const PERFORMANCE_TYPE = "<h4><strong>4. Performance</strong></h4>"
																+"<p>Problematic slowness or hanging, sluggish interface. Features take longer to load than they should, slow navigation in the application.</p>"
																+"<p><strong>Examples:</strong></p>"
																+"<ul>"
																+"<li>Application reacts slowly when navigating throughout features</li>"
																+"<li>Application or pages take too long to load</li>"
																+"<li>Application freezes or becomes unresponsive</li>"
																+"</ul>";
export const CRASH_TYPE = "<h4><strong>5. Crash</strong></h4>"
													+"<p>Application quits or closes unexpectedly while using the features.</p>"
													+"<p><strong>Examples:</strong></p>"
													+"<ul>"
													+"<li>Web - page hangs and doesn’t respond, ultimately resulting with an error, or the browser closes</li>"
													+"<li>Computer - application freezes the device, hangs for a long time or closes abruptly</li>"
													+"<li>Mobile - applications close abruptly with an error</li>"
													+"</ul>";
export const SAFARI = "<a class=\"text-success\" href='https://www.utest.com/courses/console-logs/safari-browser'>Safari Browser</a>";
export const IE = "<a class=\"text-success\" href='https://www.utest.com/courses/console-logs/internet-explorer-browser'>Internet Explorer Browser</a>";
export const MS_EDGE = "<a class=\"text-success\" href='https://www.utest.com/courses/console-logs/edge-browser'>Edge Browser</a>";
export const IOS = "<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/iphone-device-logs-with-mac'>iPhone Device Logs with Mac</a><hr/>"
									+"<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/ios-logs-with-itools'>iOS Logs with iTools</a><hr/>"
									+"<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/ios-log-files'>iOS Log Files</a>";
export const ANDROID_DEVICE_LOG = "<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/android-logs-with-adb-shell-commands'>Android Logs with ADB Shell Commands</a><hr/>"
									+"<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/android-logs-with-adb'>Android Logs with ADB</a><hr/>"
									+"<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/android-logs-with-windows'>Android Logs with Windows</a><hr/>"
									+"<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/android-studio-logs'>Android Studio Logs</a>";
export const ANDROID_CONSOLE_LOG_WITH_CHROME = "<a class=\"text-success\" href='https://www.utest.com/courses/device-logs/android-console-logs-with-chrome'>Android Console Logs with Chrome</a>";
export var environment = function(type) {
	switch(type) {
          case 'Safari':
            return SAFARI;
          case 'IE':
           return IE;
          case 'MS Edge':
           return MS_EDGE;
          case 'iOS':
            return IOS;
          case 'Android device log':
           return ANDROID_DEVICE_LOG;
         case 'Android Console Logs with Chrome':
           return ANDROID_CONSOLE_LOG_WITH_CHROME;
          default: return '';
	}
}
export var issueType = function(type) {
	switch(type) {
          case 'Content':
            return CONTENT_TYPE;
          case 'Performance':
           return PERFORMANCE_TYPE;
          case 'Visual':
           return VISUAL_TYPE;
          case 'Functional':
            return FUNCTIONAL_TYPE;
          case 'Crash':
           return CRASH_TYPE;
          default: return '';
	}
};