Assert.FavoriteItems = function () {
    this.ProductCollectionName = ["雅虎測試商店二", "$ 9,999"];
    $.delay(6);
    assertEquals(19, mainWindow.collectionViews()[0].cells()
        .length);
    assertEquals(this.ProductCollectionName[0], mainWindow.collectionViews()[0].cells()[0].name());
    assertEquals(4, mainWindow.collectionViews()[0].cells()[0].staticTexts()
        .length);
    assertEquals(this.ProductCollectionName[1], mainWindow.collectionViews()[0].cells()[0].staticTexts()[3].name());
};
