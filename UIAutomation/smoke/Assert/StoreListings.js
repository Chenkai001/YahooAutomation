Assert.StoreListings = function () {
    $.delay(sleep);
    assertEquals("共6筆結果", mainWindow.collectionViews()[0].staticTexts()[0].name());
};
