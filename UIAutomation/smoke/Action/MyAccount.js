Action.goMyAccount = function () {
    $.delay(sleep);
    app.tabBar()
        .buttons()[4].tap();
};
Action.tapLogout = function () {
    $.delay(sleep);
    navBar.rightButton()
        .tap();
    $.delay(sleep);
    actionSheet.buttons()[0].tap();
};
Action.tapLogin = function () {
    $.delay(sleep);
    tabBarMyAccount.tap();
    $.delay(sleep);
    mainWindow.tableViews()[0].cells()[0].tap();
};
Action.tapEcoupons = function () {
    $.delay(sleep);
    //click Ecoupons
    mainWindow.tableViews()[1].cells()[3].tap();
};
Action.tapOrder = function () {
    $.delay(sleep);
    //clcik order
    mainWindow.tableViews()[1].cells()[1].tap();
};
Action.tapItemCollection = function () {
    $.delay(sleep);
    //click product collection
    mainWindow.tableViews()[1].cells()[2].tap();
};
Action.tapProduct = function () {
    $.delay(6);
    //click product
    mainWindow.collectionViews()[0].cells()[0].tap();
    obj.scrollDowns(1);
};
