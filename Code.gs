// Google Apps Script code

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Current Date and Time', 'showDateTime')
      .addToUi();
}

function showDateTime() {
  var ui = SpreadsheetApp.getUi();
  var now = new Date();
  var formattedDate = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
  ui.alert('Current Date and Time (UTC): ' + formattedDate);
}