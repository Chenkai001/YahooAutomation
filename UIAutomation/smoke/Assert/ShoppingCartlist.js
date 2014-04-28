Assert.ShoppingCartList = function () {
    $.delay(6);
    assertEquals("雅虎測試商店一 CCC, 1", mainWindow.tableViews()[1].cells()[1].name());
};
