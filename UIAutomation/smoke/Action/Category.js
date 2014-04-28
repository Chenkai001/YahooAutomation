Action.goSubcategory = function () {
    $.delay(sleep);
    navBar.buttons()[1].tap();
};
Action.goCategorie = function () {
    $.delay(sleep);
    app.tabBar()
        .buttons()[2].tap();
    $.delay(sleep);
    mainWindow.tableViews()[1].cells()[0].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].visibleCells()[2].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].visibleCells()[0].tap();
};
Action.goAdvanceFunction = function () {
    $.delay(sleep);
    mainWindow.tableViews()[1].cells()[1].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].dragInsideWithOptions({
        startOffset: {
            x: 0.53,
            y: 0.73
        },
        endOffset: {
            x: 0.56,
            y: 0.33
        }
    });
    $.delay(sleep);
    mainWindow.collectionViews()[0].buttons()[0].tap();
    $.delay(sleep);
    mainWindow.segmentedControls()[0].buttons()[1].tap();
    $.delay(sleep);
    mainWindow.buttons()[1].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].buttons()[0].tap();
    $.delay(sleep);
    mainWindow.segmentedControls()[0].buttons()[2].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].dragInsideWithOptions({
        startOffset: {
            x: 0.91,
            y: 0.29
        },
        endOffset: {
            x: 0.70,
            y: 0.29
        }
    });
    $.delay(sleep);
    mainWindow.collectionViews()[1].cells()[6].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[1].cells()[0].tap();
    $.delay(sleep);
    navBar.rightButton()
        .tap();
};
Action.goSpecification = function () {
    $.delay(sleep);
    mainWindow.collectionViews()[0].tapWithOptions({
        tapOffset: {
            x: 0.39,
            y: 0.56
        }
    });
    $.delay(sleep);
    mainWindow.dragInsideWithOptions({
        startOffset: {
            x: 0.46,
            y: 0.71
        },
        endOffset: {
            x: 0.46,
            y: 0.38
        },
        duration: 1.3
    });
    $.delay(sleep);
    mainWindow.collectionViews()[0].visibleCells()[0].buttons()[0].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[1].visibleCells()[0].tap();
    $.delay(sleep);
    navBar.rightButton()
        .tap();
    $.delay(sleep);
    obj.scrollDowns(1);
}
