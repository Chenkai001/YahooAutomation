Action.goApparelCategory = function (){
    $.delay(sleep);
    app.tabBar().buttons()[2].tap(); 
    
    $.delay(sleep);
    app.mainWindow().tableViews()[1].cells()[0].tap(); 
};

Action.goCommodityTab = function (){
    $.delay(sleep);
    var commodityButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
    commodityButton.tap(); 
};

Action.goBack = function () {
	$.delay(sleep);
	var goBack = app.navigationBar().buttons()[1]; 
	goBack.tap();
};

Action.goDiscoveryStream = function () {
	$.delay(sleep);
	app.tabBar().buttons()[0].tap(); 
};

Action.tapCategory = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    categoryButton.tap();
};

Action.goCategoryTab = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    categoryButton.tap();
};

Action.scrollCollectionViewElementWithName = function (sName) {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].scrollToElementWithName(sName);
};

Action.tapSearchIconOnCategoryList = function () {
    $.delay(sleep);
    app.mainWindow().navigationBar().buttons()[2].tap();
};

Action.tapAdvancedButton = function () {
    $.delay(sleep);
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()[0];
    advancedButton.tap();
};

Action.tapButtonsInAdvancedBar = function (i) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];
    buttonOnAdvanced.tap();
};

Action.tapCancelButtonInAdvancedBar = function () {
    $.delay(sleep);
    var cancelButton = app.mainWindow().navigationBar().buttons()[0];
    cancelButton.tap();
};
/**
Action.slidePriceBar = function () {
    $.delay(sleep);

    app.mainWindow().collectionViews()[0].tap();
    $.delay(sleep);

    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.91, y:0.30}, endOffset:{x:0.20, y:0.30}, duration:8});;
};
**/

Action.tapButtonOnFilterAttributeScreen = function (i) {
    $.delay(sleep);
    var buttonOnAttribute = app.mainWindow().collectionViews()[1].cells()[i];
    buttonOnAttribute.tap();
};

Action.tapItemOnProductListScreen = function () {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];
    
    //This action is tapped item big image.
    collectionViews.tapWithOptions({
        tapOffset: {
            x: 0.39,
            y: 0.56
        }
    });
};

Action.tapFavoritesIcon = function (productIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var favoritesIcon = itemCell.buttons()[0];

    favoritesIcon.tap();
};

Action.exitLoginWindow = function () {
    $.delay(sleep);

    var exitLoginWindowButton = app.navigationBar().buttons()[0];
    exitLoginWindowButton.tap();
};

Action.doUserLogin = function (sUserName, sPassword) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();

    //Tap login button on tabBar and login window should show.
    try{
        tabBar.buttons()[4].tap();
        $.delay(sleep);

        //Verify login window show.
        Assert.logInWindowShowCorrect("登入", "忘記密碼或帳號了？", "新建帳號");
    }
    catch (err) {
        UIALogger.logError("Login window could not open due to: " + err);
    }

    //Enter username and password and click submit button.
    var loginWindow = app.mainWindow();
    var usernameField =loginWindow.textFields()[0];
    var passwordField = loginWindow.secureTextFields()[0];

    try{
        usernameField.setValue(sUserName);
        passwordField.setValue(sPassword);
        
        var loginButton = loginWindow.buttons()[0];
        loginButton.tap();

        $.delay(10);
        
        //Verify user log in successful
        var userNameOnAccount = app.mainWindow().staticTexts()[1];
        assertEquals(userNameOnAccount.name(), sUserName);
    }
    catch (err) {
        UIALogger.logError("User unable to login due to: " + err);
    }
};

//sNavBarName is used for verify page should redirect to screen after log out.
Action.doUserLogout = function () {
    $.delay(sleep);

    //Tap log out button on navigation bar.
    try{
        var actionSheet = app.actionSheet();
        var logoutButton = app.navigationBar().rightButton();
        logoutButton.tap();
        $.delay(1);
        assertEquals(false, actionSheet.isVisible());
    }
    catch (err){
        UIALogger.logError("Action sheet could not open due to: " + err);  
    }

    //Tap log out button on action sheet.
    try{
        var logoutButton = app.actionSheet().buttons()[0];
        logoutButton.tap();

        $.delay(sleep);
        //Verify user log out successful and screen reidrect to discovery scree.
        Assert.navigationBarName("最新動態");
    }
    catch (err){
        UIALogger.logError("Tap log out button meet error: " + err);  
    }
};

//remove user history sName is which user you want remove.
Action.removeLoginHistory = function (sName) {
    $.delay(sleep);

    //tap Edit button on navigation bar
    try{
        var editButton = app.navigationBar().buttons()[1];
        editButton.tap();
        $.delay(1);

        //tap remove icon
        var removeIcon = app.mainWindow().tableViews()[0].cells()[sName];

        if(removeIcon.isVisible() == true){
            var removeButton = removeIcon.buttons()[0];
            removeButton.tap();
        }
        else{
            UIALogger.logError("remove icon not show after tap edit button");
        }
    }
    catch (err){
        UIALogger.logError("Tap edit button and X icon meet error: " + err);
    }
    $.delay(sleep);
    //After edit button tapped the remove popup window show.
    var accountName = app.mainWindow().staticTexts()[0].name();
    if (accountName == sName) {
        var removeButton = app.mainWindow().buttons()[1];
        removeButton.tap();
        $.delay(1);
    }
    else {
        UIALogger.logError("remove popup window not show after tap X button");
    }

    //Verify Login window show correct, after successful removed account.
    Assert.logInWindowShowCorrect("登入", "忘記密碼或帳號了？", "新建帳號");

    //Tap close button to exit login screen.
    Action.exitLoginWindow();      

    //verify screen back to discovery screen.
    Assert.navigationBarName("最新動態");
};

Action.tapButtonOnTabBar = function (sButton) {
    $.delay(sleep);
    var tabBar = app.mainWindow().tabBar();
    var button = tabBar.buttons()[sButton];
    button.tap();
};

Action.goMayFavoritesScreen = function () {
    $.delay(sleep);
    var tableView = app.mainWindow().tableViews()[1];
    var myCollectionCell = tableView.cells()[3];
    myCollectionCell.tap();
};

Action.selectCategoryItem = function (itemName) {
    $.delay(sleep);
    var tableView = app.mainWindow().tableViews()[0];
    var itemCell = tableView.cells()[itemName];
    itemCell.tap();
};

Action.tapItemOnCategoryScreen = function (itemName) {
    $.delay(sleep);
    var categoryItem = app.mainWindow().tableViews()[1].cells()[itemName];
    categoryItem.tap();
};