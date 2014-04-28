Assert.Welcome = function () {
    $.delay(6);
    assertEquals("歡迎", mainWindow.staticTexts()[0].name());
    assertEquals("登入", mainWindow.buttons()[0].name());
    assertEquals("略過，前往下一步", mainWindow.buttons()[1].name());
};
Assert.FavoriteCategories = function () {
    assertEquals("先選擇幾個你喜愛的分類吧！", mainWindow.staticTexts()[0].name());

    this.CategoriesName = [
        "服飾",
        "美妝",
        "鞋包配飾",
        "媽咪寶貝",
        "電腦/週邊",
        "家電/視聽",
        "消費電子",
        "美食農特產",
        "量販/寵物",
        "居家/傢俱",
        "休閒/交通",
        "圖書/文具"
    ];
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        assertEquals(this.CategoriesName[i], mainWindow.collectionViews()[0].cells()[i].name());
    }
    assertEquals("建立個人化的購物體驗", mainWindow.buttons()[0].name());
};