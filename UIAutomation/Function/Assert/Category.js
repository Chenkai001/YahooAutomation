Assert.commodityHeader = function (){
    $.delay(sleep);
    assertEquals("服飾", app.navigationBar().name());
    assertEquals("UINavigationBarBackIndicatorDefault.png", app.navigationBar().buttons()[0].name());
    assertEquals(1, app.navigationBar().buttons()[2].isEnabled());
};

Assert.categoryScreen = function () {
	$.delay(sleep);
	assertEquals("全部分類", app.navigationBar().name());
};

Assert.checkTab = function () {
	$.delay(sleep);
	assertEquals("商品",app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].name());
	assertEquals("分類",app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].name());
};

Assert.verifyApparelCategory = function () {
	this.CategoryItem = ["分類", "漢神百貨品牌服飾", "漢神百貨內睡衣", "流行女裝", "中大尺碼女裝(M-7L)", "女性內睡衣", "品牌/潮流男裝"];

	$.delay(sleep);

	assertEquals(7, app.mainWindow().collectionViews()[0].cells().length);
	
	assertEquals("漢神百貨品牌服飾", app.mainWindow().collectionViews()[0].cells()[1].name());
	assertEquals("漢神百貨內睡衣", app.mainWindow().collectionViews()[0].cells()[2].name());
	assertEquals("流行女裝", app.mainWindow().collectionViews()[0].cells()[3].name());
	assertEquals("中大尺碼女裝(M-7L)", app.mainWindow().collectionViews()[0].cells()[4].name());
	assertEquals("女性內睡衣", app.mainWindow().collectionViews()[0].cells()[5].name());
	assertEquals("品牌/潮流男裝", app.mainWindow().collectionViews()[0].cells()[6].name());
};

Assert.commodityButtonStatus = function () {
	$.delay(sleep);
	var commodityButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1].isEnabled();
	assertEquals(1, commodityButtonStatus);
};

Assert.categoryButtonStatus  = function () {
	$.delay(sleep);
	var categoryButtonStatus = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0].isEnabled();
	assertEquals(1, categoryButtonStatus);
};

Assert.commodityItemsShowCount = function (iCount) {
	$.delay(sleep);
	var commodityItemListCount = app.mainWindow().collectionViews()[0].cells().length;

	//Due to the first cell is commodity and category tab, so the array list should plus one.
	assertEquals(iCount, commodityItemListCount);
};

Assert.categoriesList = function () {
	this.CategoriesName = [
        "服飾",
        "美妝",
        "鞋包配飾",
        "媽咪寶貝",
        "電腦/週邊",
        "家電/視聽",
        "相機/ 手機/玩具",
        "美食/ 保健/飲料",
        "日用品/ 清潔/寵物",
        "居家/ 寢具/傢俱",
        "運動/ 戶外/休閒",
        "圖書/ 文具/影音"
    ];

    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        assertEquals(this.CategoriesName[i], app.mainWindow().tableViews()[1].cells()[i].name());
    }
};

Assert.buttonOnAdvancedIsEnabled = function (i) {
	$.delay(sleep);
	var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];
	assertEquals(1, buttonOnAdvanced.isEnabled());
};

Assert.elementsOrderInSortTab = function () {
	$.delay(sleep);

	var sortTabTableView = app.mainWindow().tableViews()[1];
	var relevanceValue = sortTabTableView.cells()[0].name();
	var latestItems = sortTabTableView.cells()[1].name();
	var priceLowToHigh = sortTabTableView.cells()[2].name();
	var priceHighToLow = sortTabTableView.cells()[3].name();
	
	assertEquals("相關度", relevanceValue);
	assertEquals("最新上架", latestItems);
	assertEquals("價錢低到高", priceLowToHigh);
	assertEquals("價錢高到低", priceHighToLow);
};

Assert.elementsOnFilterScreen = function () {
	$.delay(sleep);

	//Verify "100000 + 元" show correct.
	var priceNumber100000 = app.mainWindow().staticTexts()[1].name();
	assertEquals("100000+ 元", priceNumber100000);

	//Verify "0 元" show correct.
	var priceNumber0 = app.mainWindow().staticTexts()[2].name();
	assertEquals("0 元", priceNumber0);

	//verify circle image and bar image show correct.
	var circleImage1 = app.mainWindow().images()[2].name();
	var circleImage2 = app.mainWindow().images()[3].name();
	var barImage1 = app.mainWindow().images()[4].name();
	var barImage2 = app.mainWindow().images()[5].name();

	assertEquals("circle.png", circleImage1);
	assertEquals("circle.png", circleImage2);
	assertEquals("bar-grey.png", barImage1);
	assertEquals("bar-blu.png", barImage2);

	//Verify all attribute elements show correct.
	this.AttributeElements = ["可刷卡", "0利率", "可分期", "超商付款", "超商取貨", "有現貨", "有影音", "有圖片", "優良商店"];

	for (var i = 0; i < 9; i++){
		assertEquals(this.AttributeElements[i], app.mainWindow().collectionViews()[1].cells()[i].name());
	}
 };

 Assert.buttonExistOnNavigationBar = function (i, sName) {
 	$.delay(sleep);

 	var navBar = app.navigationBar().buttons()[i];
 	assertEquals(sName, navBar.name());
 }

 Assert.filterAttributeButtonIsTapped = function (i) {
 	$.delay(sleep);
 	var attributeButton = app.mainWindow().collectionViews()[1].cells()[i];
 	var buttonStatus = attributeButton.value();

 	assertEquals(1, buttonStatus);
 };

 Assert.filterAttributeButtonIsNotTapped = function (i) {
 	$.delay(sleep);
 	var attributeButton = app.mainWindow().collectionViews()[1].cells()[i];
 	var buttonStatus = attributeButton.value();

 	assertEquals(0, buttonStatus);
 };

 Assert.navigationBarName = function (sName) {
 	$.delay(sleep);
 	assertEquals(sName, app.navigationBar().name());
 };

 Assert.itemPageShowCorrect = function (sTitle) {
 	$.delay(sleep);

 	var collectionViews = app.mainWindow().collectionViews()[0];

 	//Assert item title show correct.
 	var titleName = collectionViews.cells()[1];
 	assertEquals(sTitle, titleName.name());

 	//Assert size selection bar show correct.
 	var sizeSelectionBar = collectionViews.cells()[4];
 	assertEquals("請選擇尺寸與規格", sizeSelectionBar.name());

 	//Assert buy and add to cart button show correct.
 	var addToCartButton = collectionViews.cells()[5].buttons()[0];
 	var butButton = collectionViews.cells()[5].buttons()[1];
 	
 	assertEquals("加入購物車", addToCartButton.name());
 	assertEquals("立即購買", butButton.name());
 };

/**
  * Verify the price of product show correct.
  * This function need pas two parameters.
  * productIndex, is which product you want verify, 
  * priceIndex, is the price index, sometimes different product priceIndex is different.
**/
 Assert.productPriceShowCorrect = function (productIndex, priceIndex) {
 	$.delay(sleep);
 	var collectionViews = app.mainWindow().collectionViews()[0];

 	var itemCell = collectionViews.cells()[productIndex];
 	var priceLocate = itemCell.staticTexts()[priceIndex];
 	var priceValue = priceLocate.value();

 	//Use the regex to match the first characters is $
 	var stringRe = /^\$/g.test(priceValue);
 	assertTrue(stringRe, "The first characters not $");
 };

/**
  * Verify the rating of product show correct.
  * This function need pas three parameters.
  * productIndex, is which product you want verify, 
  * ratingIndex, is the rating index, sometimes different product rating index is different.
**/
 Assert.storeRatingShowCorrect = function (productIndex, ratingIndex) {
 	$.delay(sleep);
 	var collectionViews = app.mainWindow().collectionViews()[0];

 	var itemCell = collectionViews.cells()[productIndex];
 	var ratingIndexValue = itemCell.staticTexts()[ratingIndex];
 	var ratingValue = ratingIndexValue.value();
 	
 	//Get the value of rating, if this value is less than 10 then return True.
 	assertTrue(ratingValue <= 10, "Rating value isnot correct, the value is greater than 10");
 };

 Assert.favoritesIconShowCorrect = function (productIndex) {
 	$.delay(sleep);
 	var collectionViews = app.mainWindow().collectionViews()[0];

 	var itemCell = collectionViews.cells()[productIndex];
 	var favoritesIcon = itemCell.buttons()[0];
 	var favoritesIconName = favoritesIcon.name();

 	assertEquals("icon star", favoritesIconName);
 };

 Assert.logInWindowShowCorrect = function (sLogin, sForgotPassword, sCreateAccount) {
 	$.delay(sleep);

 	var yahooLogoName = app.mainWindow().images()[0].name();
 	assertEquals("yaccounts_logo_purple", yahooLogoName);

 	var loginButtonName = app.mainWindow().buttons()[0].name();
 	assertEquals(sLogin, loginButtonName);

 	var forgotPasswordButtonName = app.mainWindow().buttons()[1].name();
 	assertEquals(sForgotPassword, forgotPasswordButtonName);

 	var createAccountButtonName = app.mainWindow().buttons()[2].name();
 	assertEquals(sCreateAccount, createAccountButtonName);
 };

 Assert.userLoginHistoryScreen = function (sNavBarName, sUserName) {
 	$.delay(sleep);

 	//Verify navigation bar name show correct.
 	var navBarName = app.navigationBar().name();
 	assertEquals(sNavBarName, navBarName);

 	//Verify user name show correct.
 	var tableview = app.mainWindow().staticTexts()[1];
 	var username = tableview.name();
 	assertEquals(sUserName, username);
 };

 Assert.productAddedToMyFavoritesScreen = function (productName) {
 	$.delay(4);
 	var collectionView = app.mainWindow().collectionViews()[0];
 	var productCell = collectionView.cells()[0];

 	assertEquals(productName, productCell.name());
 };

 Assert.productRemovedFromMyFavoritesScreen = function (productName) {
 	$.delay(4);
 	var collectionView = app.mainWindow().collectionViews()[0];
 	var productCell = collectionView.cells()[0];

 	assertNotEquals(productName, productCell.name());
 };

 Assert.buttonOnTabBarShowCorrect = function (buttonName) {
 	$.delay(sleep);
 	var tabBar = app.mainWindow().tabBar();
    var button = tabBar.buttons()[buttonName];

    assertTrue(button.isVisible(), buttonName + " not exist");
 };

 Assert.buttonExist = function (elements) {
 	if (elements.isVisible() == true) {
 		UIALogger.logMessage("button exists on screen.");
 	}
 	else {
 		UIALogger.logError("Cannot found button.");
 	}
 	return true;
 };

 Assert.checkButtonExist = function (elements) {
 	$.delay(sleep);
 	assertTrue(Assert.buttonExist(elements), "button not exists");
 };

 Assert.itemCellShowCorrectOnCategoryScreen = function (itemName) {
 	$.delay(sleep);
 	var itemCell = app.mainWindow().tableViews()[0].cells()[itemName];
 	var itemCellName = itemCell.name();

 	assertEquals(itemName, itemCellName);
 };