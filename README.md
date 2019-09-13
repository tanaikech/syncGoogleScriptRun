# syncGoogleScriptRun

[![Build Status](https://travis-ci.org/tanaikech/syncGoogleScriptRun.svg?branch=master)](https://travis-ci.org/tanaikech/syncGoogleScriptRun)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENCE)

<a name="top"></a>

# Overview

This is a Javascript library to use "google.script.run" with the synchronous process.

# Description

When I create Web Apps, add-on using a side bar and dialog, there is the case that I want to use `google.script.run` with the synchronous process. As you know, [`google.script.run` works with the asynchronous process](https://developers.google.com/apps-script/guides/html/reference/run). So in order to use it as the synchronous process, the script is required to be prepared. I also saw several issues for such situation at Stackoverflow and other sites. I thought that when the script for achieving this was prepared as a library, it might be useful for users. So I created this.

# Install

```html
<script src="syncGoogleScriptRun.min.js"></script>
```

Or, using jsdelivr cdn

```html
<script src="https://cdn.jsdelivr.net/gh/tanaikech/syncGoogleScriptRun@master/syncGoogleScriptRun.min.js"></script>
```

- Of course, you can use this by directly copying and paste the script of [syncGoogleScriptRun.js](https://github.com/tanaikech/syncGoogleScriptRun/blob/master/syncGoogleScriptRun.js) to the script editor.

<a name="method"></a>

# Method

| Method                      | Explanation                                                        |
| :-------------------------- | :----------------------------------------------------------------- |
| syncGoogleScriptRun(object) | Run a function of Google Apps Script with the synchronous process. |

- `object`: There are 2 properties.
  - `gasFunction`: Function name of Google Apps Script side.
  - `arguments`: Arguments for the function.

<a name="usage"></a>

# Usage

## Sample script

In this sample script, the result is returned every 1 second.

When you use the following sample script, please copy and paste the following scripts to the container-bound script of Spreadsheet. And run `openDialog()`. By this, a dialog is opened at Spreadsheet. When you clicked the button, you can see the result at the console.

#### HTML side: `index.html`

```HTML
<input type="button" value="Run script" onClick="run()">

<script src="https://cdn.jsdelivr.net/gh/tanaikech/syncGoogleScriptRun@master/syncGoogleScriptRun.min.js"></script>

<script>
async function run() {
  for (let i = 0; i < 5; i++) {

    const resource = {
      gasFunction: "myFunction", // Function name of Google Apps Script side
      arguments: i // Arguments for the function
    };
    const res = await syncGoogleScriptRun(resource).catch(e => {throw new Error(e)});

    console.log(res);
  }
}
</script>
```

#### Google Apps Script side: `Code.gs`

```javascript
function myFunction(e) {
  Utilities.sleep(1000);
  return e;
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile("index");
  SpreadsheetApp.getUi().showModalDialog(html, "sample");
}
```

#### Result
When the button of "Run script" is clicked, you can see the following result at the console.

```
0
1
2
3
4
```

---

<a name="licence"></a>

# Licence

[MIT](LICENCE)

<a name="author"></a>

# Author

[Tanaike](https://tanaikech.github.io/about/)

If you have any questions and commissions for me, feel free to tell me.

<a name="updatehistory"></a>

# Update History

- v1.0.0 (September 13, 2019)

  1. Initial release.

[TOP](#top)
