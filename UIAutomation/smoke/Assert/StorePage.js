Assert.StorePage = function () {
    $.delay(sleep);
    assertEquals("共1筆結果", collectionView[0].staticTexts()[0].name());
    assertEquals("商店", collectionView[0].cells()[0].buttons()[1].name());
};
