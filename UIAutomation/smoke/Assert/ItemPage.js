Assert.ItemPage = function () {
    this.ItemPageName = [
        "立即購買",
        "商品詳細說明",
        "付款即交貨方式",
        "看店家全部商品",
        "購物須知",
        "分享商品"
    ];
    $.delay(sleep);
    assertEquals(2, mainWindow.collectionViews()[0].cells()[5].buttons()
        .length);
    assertEquals(this.ItemPageName[0], mainWindow.collectionViews()[0].cells()[5].buttons()[0].name());
    assertEquals(this.ItemPageName[1], mainWindow.collectionViews()[0].cells()[4].tableViews()[0].cells()[0].name());
    assertEquals(this.ItemPageName[2], mainWindow.collectionViews()[0].cells()[4].tableViews()[0].cells()[1].name());
    assertEquals(this.ItemPageName[3], mainWindow.collectionViews()[0].cells()[4].tableViews()[0].cells()[2].name());
    assertEquals(this.ItemPageName[4], mainWindow.collectionViews()[0].cells()[4].tableViews()[0].cells()[3].name());
    assertEquals(this.ItemPageName[5], mainWindow.collectionViews()[0].cells()[4].tableViews()[0].cells()[4].name());
};
