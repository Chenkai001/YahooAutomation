Action.Logout = function () {
    $.delay(sleep);
    app.navigationBar()
        .rightButton()
        .tap();
    $.delay(sleep);
    target.frontMostApp()
        .actionSheet()
        .buttons()["登出"].tap();
};
Action.Login = function () {
    $.delay(sleep);
    mainWindow.tableViews()[0].cells()["mobileappstore2"].tap();
};
