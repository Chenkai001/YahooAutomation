Action.goCheckout = function () {
    $.delay(sleep);
    //buy item to shopping cart
    mainWindow.collectionViews()[0].cells()["立即購買"].buttons()["立即購買"].tap();
    $.delay(sleep);
    //select spec
    mainWindow.collectionViews()[1].cells()["紅色"].tap();
    $.delay(sleep);
    app.navigationBar()
        .rightButton()
        .tap();
};
Action.runCheckout = function () {
    $.delay(10);
    mainWindow.scrollViews()[0].webViews()[0].scrollDown();
    //I want Checkout
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].buttons()["我要結帳"].tap();
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].scrollDown();
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].buttons()["我要結帳"].tap();
    $.delay(sleep);
    //tap phone number
    mainWindow.scrollViews()[0].webViews()[0].textFields()[2].tap();
    $.delay(sleep);
    app.keyboard()
        .typeString("02");
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].textFields()[3].tap();
    $.delay(sleep);
    app.keyboard()
        .typeString("23602970");
    $.delay(sleep);
    app.windows()[1].toolbar()
        .buttons()["Done"].tap();
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].scrollDown();
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].buttons()["我要結帳"].tap();
};
