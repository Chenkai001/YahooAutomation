Action.addFavoriteItems = function () {
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    //tap search bar
    app.navigationBar()
        .buttons()[2].tap();
    $.delay(sleep);
    //tap search keywords
    mainWindow.tableViews()[1].cells()[0].tap();
    $.delay(sleep);
    //tap icon star
    mainWindow.collectionViews()[0].cells()[1].buttons()[0].tap();
};
Action.delFavoriteItems = function () {
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    //tap icon heart
    mainWindow.collectionViews()[0].cells()[1].buttons()[0].tap();
};
