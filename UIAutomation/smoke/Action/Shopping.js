Action.addShoppingCart = function () {
    $.delay(sleep);
    //add item to shopping cart
    mainWindow.collectionViews()[0].cells()["立即購買"].buttons()[1].tap();
    $.delay(sleep);
    //add spec
    mainWindow.collectionViews()[1].cells()[0].tap();
    $.delay(sleep);
    app.navigationBar()
        .rightButton()
        .tap();
};
Action.goShoppingCart = function () {
    $.delay(sleep);
    //go to shopping cart
    app.tabBar()
        .buttons()[3].tap();
    //tabBarShoppingCart.tap();
};
Action.delShoppingCart = function () {
    $.delay(sleep);
    //into item page
    mainWindow.tableViews()[1].cells()[4].tap();
    $.delay(6);
    //tap delete icon
    mainWindow.scrollViews()[0].webViews()[0].tapWithOptions({
        tapOffset: {
            x: 0.89,
            y: 0.52
        }
    });
    $.delay(sleep);
    //confirm
    mainWindow.scrollViews()[0].webViews()[0].links()["確定"].tap();
};
Action.nextBuy = function () {
    $.delay(sleep);
    //into item page
    mainWindow.tableViews()[1].cells()[2].tap();
    $.delay(6);
    //tap next buy icon
    mainWindow.scrollViews()[0].webViews()[0].tapWithOptions({
        tapOffset: {
            x: 0.79,
            y: 0.30
        }
    });
    $.delay(sleep);
    mainWindow.scrollViews()[0].webViews()[0].links()[11].tap();
    $.delay(sleep);
};
