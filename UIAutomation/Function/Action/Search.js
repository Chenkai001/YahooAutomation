Action.tapSearchIconOnNavBar = function () {
    $.delay(sleep);
    app.navigationBar().buttons()[2].tap();
    app.mainWindow();
};

Action.tapBackOnSearchBar = function () {
    $.delay(sleep);
    app.mainWindow().buttons()[1].tap();
};

//Click search, and input
Action.searchBarInput = function (skey) {
    $.delay(sleep);
    var app = target.frontMostApp();
    app.keyboard().typeString(skey);
};

Action.tapIconPlusOnTableView = function () {
    $.delay(sleep);
     app.mainWindow().tableViews()[1].cells()[0].buttons()[0].tap();
};

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlus = function () {
    $.delay(sleep);
     app.mainWindow().tableViews()[1].cells()[0].buttons()[0].tap();
    $.delay(sleep);
     app.mainWindow().tableViews()[1].cells()[0].buttons()[0].tap();
};
//----------------------------------------4.17
Action.tapKeyboardSearch = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    app.keyboard().buttons()["Search"].tap();
};

//---------------------------------------4.18
Action.tapClean = function () {
     app.mainWindow().textFields()[0].buttons()[0].tap();
};

Action.tapKeyboardDelete = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    app.keyboard().keys()["Delete"].tap();
};

//clean Searches
Action.cleanSearches = function () {
    $.delay(sleep);
    //Tap setting menu button.
    var settingButton = app.navigationBar().buttons()[1];
    settingButton.tap();
    $.delay(sleep);

    //Select setting on Tools
    var settingsButton = app.windows()[0].tableViews()[0].cells()[9];
    settingsButton.tap();
    $.delay(sleep);
    
    app.windows()[0].collectionViews()[0].cells()[1].logElementTree();
    //tap clean search history button.   
    var cleanSearchHistoryButton = app.windows()[0].collectionViews()[0].cells()["搜尋記錄"];
    cleanSearchHistoryButton.tap();

    //Tap OK button on 確定 alert window.
    UIATarget.onAlert = function onAlert() {
        return true;
    };

    app.alert().defaultButton().tap();
    $.delay(sleep);

    //Tap close button.
    app.navigationBar().buttons()[1].tap();

    //Tap menu button to navigate to discovery screen.
    settingButton.tap();
};


//-----------------4.20
Action.searchBarInputChinese = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
     app.mainWindow().textFields()[0].setValue("東");
};

//Action.tapReturnOnSearchBar = function () {
//    $.delay(sleep);
//     app.mainWindow().buttons()[1].tap();
//};

//Action.doubleClickReturnButton = function () {
//    $.delay(sleep);
//    app.mainWindow().navigationBar().buttons()[0].tap();
//    $.delay(5);
//     app.mainWindow().buttons()[0].tap();
//};

Action.tapIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
     app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
};

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
};

Action.goBackOnSearchPage = function () {
    $.delay(sleep);
    var goBack = app.navigationBar().buttons()[2];
    goBack.tap();
};