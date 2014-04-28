Assert.ShoppingCart = function () {
    $.delay(sleep);
    assertEquals("雅虎測試商店二, 1", mainWindow.tableViews()[1].cells()["雅虎測試商店二, 1"].name());
};
Assert.nextBuyShoppingCart = function () {
    $.delay(sleep);
    assertEquals("雅虎測試商店二, 1", mainWindow.tableViews()[1].cells()[4].name());
};
