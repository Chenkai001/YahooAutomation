Assert.keyboardIsEnabled = function () {
    $.delay(sleep);
    var keyboardValue = app.keyboard().isEnabled();
    assertEquals(1, keyboardValue);
};

Assert.textIsEnabled = function (sText) {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    assertEquals(sText,app.mainWindow().textFields()[0].value());
};

Assert.backButtonOnSearchBar = function () {
    $.delay(sleep);
    assertEquals("icon back", app.mainWindow().buttons()[1].name());
};
//----------------------------------------4.16
Assert.checkReturnPageDisplay =function () {
    $.delay(sleep);
    assertEquals("最新動態", app.mainWindow().navigationBar().name());
};

//Check if search Suggestions
Assert.autoCompletePageDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    assertTrue(app.mainWindow().tableViews()[1].cells().length<20);
};

Assert.checkIconPlusDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(sleep);
    assertEquals("icon plus", app.mainWindow().tableViews()[1].cells()[0].buttons()[0].name());
  };

//----------------------------------------4.17

Assert.searchResultsPage = function () {
    $.delay(sleep);
    assertEquals("\"hl中大尺碼\"", app.navigationBar().name());
   
};
//----------------------------------------4.18
//check whether there is a key
Assert.checkCleanIconDisplay = function () {
    var mainWindow = app.mainWindow();
    var cleanIcon = app.mainWindow().textFields()[0].buttons()[0].isEnabled();
    if (cleanIcon != 1){
        UIALogger.logPass("No clean icon");
    }
    else{
        UIALogger.logFail("clean icon still present");
    }
};

Assert.checkCleanIcon = function () {
    assertEquals("Clear text",app.mainWindow().textFields()[0].buttons()[0].name());
};

//Verify whether the clear one character at a time
Assert.checkEveryDelete = function () {
    assertEquals("123",app.mainWindow().textFields()[0].value());
};

Assert.checkSearchPage = function (skey) {
    assertEquals(skey, app.mainWindow().navigationBar().name());
};

Assert.searchSuggestionsPageDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    assertTrue(app.mainWindow().tableViews()[1].cells().length<1);
};