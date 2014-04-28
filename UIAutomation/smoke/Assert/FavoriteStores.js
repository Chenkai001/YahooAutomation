Assert.FavoriteStores = function () {
    this.FavoriteStoresName = [
        "您的最愛商店",
        "雅虎測試商店一 CCC",
        "2 件新品上架",
        "2 張折價券"
    ];
    $.delay(10);
    assertEquals(1, mainWindow.collectionViews()[0].staticTexts()
        .length);
    assertEquals(this.FavoriteStoresName[0], mainWindow.collectionViews()[0].staticTexts()[0].name());
    assertEquals(this.FavoriteStoresName[1], mainWindow.collectionViews()[0].cells()[0].name());
    assertEquals(this.FavoriteStoresName[2], mainWindow.collectionViews()[0].cells()[0].staticTexts()[1].name());
    assertEquals(this.FavoriteStoresName[3], mainWindow.collectionViews()[0].cells()[0].staticTexts()[2].name());
};
Assert.delFavoriteStores = function () {
    this.FavoriteStoresName = [
        "您的最愛商店",
        "H&D居家生活設計館",
        "102 件新品上架"
    ];
    $.delay(10);
    assertEquals(1, mainWindow.collectionViews()[0].staticTexts()
        .length);
    assertEquals(this.FavoriteStoresName[0], mainWindow.collectionViews()[0].staticTexts()[0].name());
    assertEquals(this.FavoriteStoresName[1], mainWindow.collectionViews()[0].cells()[0].name());
    assertEquals(this.FavoriteStoresName[2], mainWindow.collectionViews()[0].cells()[0].staticTexts()[1].name());
};
