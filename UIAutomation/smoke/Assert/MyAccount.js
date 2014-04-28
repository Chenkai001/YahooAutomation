Assert.MyAccount = function () {
    this.MyAccountName = [
        "Terms and Privacy", "mobileappstore2",
        "mobileappstore2",
        "編輯喜愛的分類",
        "訂單查詢",
        "商品收藏, 18",
        "電子折價券"
    ];
    $.delay(sleep);
    assertEquals(3, mainWindow.staticTexts()
        .length);
    for (var i = 0; i < 3; i++) {
        assertEquals(this.MyAccountName[i], mainWindow.staticTexts()[i].name());
    }
    assertEquals(4, mainWindow.tableViews()[1].cells()
        .length);
    assertEquals(this.MyAccountName[3], mainWindow.tableViews()[1].cells()[0].name());
    assertEquals(this.MyAccountName[4], mainWindow.tableViews()[1].cells()[1].name());
    assertEquals(this.MyAccountName[5], mainWindow.tableViews()[1].cells()[2].name());
    assertEquals(this.MyAccountName[6], mainWindow.tableViews()[1].cells()[3].name());
};
Assert.Ecoupons = function () {
    this.EcouponsName = [
        "電子折價券",
        "雅虎測試商店一 CCC",
        "Test E-Coupon Activity 折價券",
        "生效日：2014/02/16",
        "到期日：2014/03/15", "已>生效",
        "折抵金額：", "$300"
    ];
    $.delay(sleep);
    assertEquals(2, mainWindow.scrollViews()[0].webViews()[0].staticTexts()
        .length);
    assertEquals(this.EcouponsName[0], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[0].name());
    assertEquals(5, mainWindow.scrollViews()[0].webViews()[0].links()
        .length);
    assertEquals(this.EcouponsName[1], mainWindow.scrollViews()[0].webViews()[0].links()[1].name());
    assertEquals(this.EcouponsName[2], mainWindow.scrollViews()[0].webViews()[0].links()[2].name());
    assertEquals(this.EcouponsName[3], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[1].name());
    assertEquals(this.EcouponsName[4], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[2].name());
    assertEquals(this.EcouponsName[5], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[3].name());
    assertEquals(this.EcouponsName[6], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[4].name());
    assertEquals(this.EcouponsName[7], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[5].name());
};
Assert.Order = function () {
    this.OrderName = [
        "訂單查詢",
        "切換至電腦版",
        "雅虎測試商店二",
        "訂單明細",
        "TEST-claire-01",
        "數量：1"
    ];
    $.delay(sleep);
    assertEquals(68, mainWindow.scrollViews()[0].webViews()[0].staticTexts()
        .length);
    assertEquals(this.OrderName[0], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[0].name());
    assertEquals(33, mainWindow.scrollViews()[0].webViews()[0].links()
        .length);
    assertEquals(this.OrderName[1], mainWindow.scrollViews()[0].webViews()[0].links()[0].name());
    assertEquals(this.OrderName[2], mainWindow.scrollViews()[0].webViews()[0].links()[1].name());
    assertEquals(this.OrderName[3], mainWindow.scrollViews()[0].webViews()[0].links()[2].name());
    assertEquals(this.OrderName[4], mainWindow.scrollViews()[0].webViews()[0].links()[3].name());
    assertEquals(this.OrderName[5], mainWindow.scrollViews()[0].webViews()[0].staticTexts()[1].name());
};
Assert.ItemCollection = function () {
    this.ProductCollectionName = [
        "雅虎測試商店一 CCC",
        "免開發票",
        "$ 399"
    ];
    $.delay(6);
    assertEquals(18, mainWindow.collectionViews()[0].cells()
        .length);
    assertEquals(this.ProductCollectionName[0], mainWindow.collectionViews()[0].cells()[0].name());
    assertEquals(4, mainWindow.collectionViews()[0].cells()[0].staticTexts()
        .length);
    assertEquals(this.ProductCollectionName[1], mainWindow.collectionViews()[0].cells()[0].staticTexts()[2].name());
    assertEquals(this.ProductCollectionName[2], mainWindow.collectionViews()[0].cells()[0].staticTexts()[3].name());
};
