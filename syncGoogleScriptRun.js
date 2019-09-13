/**
 * syncGoogleScriptRun for Javascript library
 * GitHub  https://github.com/tanaikech/syncGoogleScriptRun<br>
 *
 * Run google.script.run with the synchronous process.
 * @param {Object} resource the object for using syncGoogleScriptRun.
 * @return {Object} Returned value from the function of Google Apps Script side.
 */
const syncGoogleScriptRun = resource => {
  return new Promise((resolve, reject) => {
    google.script.run
      .withFailureHandler(e => reject(e))
      .withSuccessHandler(e => resolve(e))
      [resource.gasFunction](resource.arguments);
  });
};
