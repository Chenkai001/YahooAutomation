Assert.Checkout = function () {
    $.delay(8);
    assertEquals("完成訂購", mainWindow.scrollViews()[0].webViews()[0].staticTexts()[6].name());
};
