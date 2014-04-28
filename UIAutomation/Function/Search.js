//04-16-2014
test("[1937852] click on the search", function () {
    Action.tapSearchIconOnNavBar();
    Assert.keyboardIsEnabled();
    Action.tapBackOnSearchBar();
});

test("[1937854] look at the search bar tooltip text display", function () {
    Action.tapSearchIconOnNavBar();
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapBackOnSearchBar();
});

test("[1937855] Check return icon display", function () {
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    //Check return icon display
    Assert.backButtonOnSearchBar();
    Action.tapBackOnSearchBar();
});

//04-17-2014
test("[1937856] Click to return to the icon", function () {
    Action.tapSearchIconOnNavBar();
    Action.tapBackOnSearchBar();
    $.delay(sleep);
     
    //Check return page display
    Assert.checkReturnPageDisplay("最新動態");
});

test("[1937857] Auto complete function", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(sleep);
     
    //check autoComplete page display
    Assert.autoCompletePageDisplay();
    $.delay(sleep);
    Action.tapBackOnSearchBar();
});

test("[1937858] Auto complete layout view", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(5);
     
    Assert.checkIconPlusDisplay();
    Action.tapBackOnSearchBar();
});

//04-18-2014
test("[1937859] Click the auto - complete list right side '+' Icon", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(5);
     
    //To obtain name
    var plusValue = app.mainWindow().tableViews()[1].cells()[1].staticTexts()[0].name();
     
    //tap plus
    Action.tapIconPlusOnTableView();
    $.delay(sleep);
     
    //check the auto - complete list right side '+' Icon
    Assert.tapIconPlusOnTableViewCheckTextIsEnabled(plusValue);
    $.delay(sleep);
    Action.tapBackOnSearchBar();
});

test("[1937860] Click on the search for 2 times suggest different keyword '+' icon on the right", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(5);
     
    //Click on the different icon plus
    Action.tapIconPlusOnTableView();
    $.delay(5);
     
    var plusValue = app.mainWindow().tableViews()[1].cells()[0].staticTexts()[0].name();
     
    Action.clickOnTheDifferentIconPlus();
    $.delay(sleep);
     
    // check different keyword '+' icon on the right
    Assert.clickOnTheDifferentIconPlusCheckTextIsEnabled(plusValue);
    $.delay(sleep);
    Action.tapBackOnSearchBar();
});


test("[1937861] According to the search Suggestions", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(5);
     
    //Check the search results page display properly
    var plusValue = app.mainWindow().tableViews()[1].cells()[1].staticTexts()[0].name();
    Action.tapIconPlusOnTableView();
    $.delay(5);
     
    Action.tapKeyboardSearch();
     
    Assert.searchResultsPage(plusValue);
    $.delay(sleep);
     
    //go back
    Action.goBackOnSearchPage();
    Action.tapBackOnSearchBar();
     
    //clean Searches
    Action.cleanSearches();
});

//04-21-2014
test("[1937862] No keyword, see clear input icon", function () {
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    //check clean icon display
    Assert.checkCleanIconDisplay();
    $.delay(5);
    //app.mainWindow().logElementTree();
    Action.tapReturnOnSearchBar();
});

test("[1937863] Have a keyword, see clear input icon display", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(sleep);
     
    //Verify whether the clean button
    Assert.checkCleanIcon();
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
});

test("[1937864] Click remove input icon", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapClean();
    $.delay(sleep);
     
    //Verify whether to remove the search box
    Assert.textIsEnabled("搜尋全部商品");
    $.delay(sleep);
    Action.tapReturnOnSearchBar();
});

test("[1937865] Check the keyboard to remove function", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("1234");
    Action.tapKeyboardDelete();
    $.delay(sleep);
     
    //Verify whether the clear one character at a time
    Assert.checkEveryDelete();
    Action.tapReturnOnSearchBar();
});

test("[1937866] Enter a keyword search", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Assert.checkSearchPage("\"h\"");
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //clean searches
    Action.cleanSearches();
});

test("[1937867] Type in Chinese to check auto complete", function () {
    Action.tapSearchIconOnNavBar();
     
    //In the search bar type in Chinese
    Action.searchBarInputChinese("東");
     
    //Check the search Suggestions have been displayed in the list
    Assert.autoCompletePageDisplay();
    Action.tapReturnOnSearchBar();
});

//04-24-2014
test("[1937873] Check list recent search for '+' icon on the right side", function () {
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //Click on the plus to validate recent search record is added to the right
    Action.tapSearchIconOnNavBar();
    Action.tapIconPlusOnFirstFloorTableView();
    Assert.textIsEnabled("h")
    Action.tapReturnOnSearchBar();
     
    //Clean searches
    Action.cleanSearches();
});

test("[1937874] At the most recent search keyword search", function () {
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //Enter the search page
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
    Action.tapIconPlusOnFirstFloorTableView();
    Action.tapKeyboardSearch();
    $.delay(sleep);
    Assert.checkSearchPage("\"h\"");
     
    //Clean searches
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.cleanSearches();
});

//04-22-2014
test("[1937875] No search Suggestions according to look at it", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("yeruieujeueu");
     
    //Validate the input “yeruieujeueu” , no search Suggestions
    Assert.searchSuggestionsPageDisplay();
    Action.tapReturnOnSearchBar();
});

test("[1937876] No recent search shows that view", function () {
    Action.tapSearchIconOnNavBar();
     
    //check no recent search shows that view
    Assert.searchSuggestionsPageDisplay();
    Action.tapReturnOnSearchBar();
});

//04-24-2014
test("[1937877] Click on the recent twice different keyword search for the right '+'", function () {
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
     
    //double tap plus
    Action.tapSearchIconOnNavBar();
    Action.tapIconPlusOnFirstFloorTableView();
    $.delay(5);
     
    var plusValue = app.mainWindow().tableViews()[0].cells()[0].staticTexts()[0].name();
     
    //click on the different icon plus
    Action.clickOnTheDifferentIconPlusOnFirstFloorTableView();
     
    //verify click on the different icon plus on first floor tableView show the correct
    Assert.clickOnTheDifferentIconPlusOnFirstFloorTableView(plusValue);
    $.delay(sleep);
     
    //Clean searches
    Action.tapReturnOnSearchBar();
    Action.cleanSearches();
});

test("[1937878] Clean up into recent search keyword", function () {
    //Click on search and input “h” and "hp" for search record
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
     
    Action.searchBarInput("hp");
    Action.tapKeyboardSearch();
    $.delay(sleep);
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
    Action.tapIconPlusOnFirstFloorTableView();
    $.delay(sleep);
    Action.tapClean();
    $.delay(sleep);
     
    //Verify the success of a cleanup
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapReturnOnSearchBar();
    Action.cleanSearches();
});

//04-23-2014
test("[1937879] Clean up into the keyword search proposal", function () {
    //Click on search and input “h”
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    $.delay(sleep); 
    Action.tapIconPlusOnFirstFloorTableView();
     
    //Click clean button
    Action.tapClean();
    $.delay(sleep);
     
    //Verify the success of a cleanup
    Assert.textIsEnabled("搜尋全部商品");
    Action.tapReturnOnSearchBar();
});

test("[1937887] To view the search icon display", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //verify search Button an apparel category is enabled
    Assert.searchButtonOnApparelCategoryIsEnabled();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937888] click search icon", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //tap search icon on apparel category
    Action.tapSearchIconOnApparelCategory();
     
    //Check into the search page
    Assert.textIsEnabled("搜尋服飾");
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937890] Click to return to the icon L2 layer classification", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //tap search icon on apparel category
    Action.tapSearchIconOnApparelCategory();
    Action.tapReturnOnSearchBar();
     
    //check Return "服飾" Page Display
    Assert.checkReturnPageDisplay("服飾");
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

//04-25-2014
test("[1937886] Enter any long keyword search", function () {
    $.delay(sleep);
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("JJHGHKJHHHHHJJJJJJHG");
    Action.tapKeyboardSearch();
    $.delay(5);
    target.logElementTree();
     
    //Validate the input “JJHGHKJHHHHHJJJJJJHG” , no search Suggestions
    Assert.longtextSearchPageDisplay();
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.cleanSearches();
});

test("[1937891] Click to return to the icon L3 layer classification", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
    
    Assert.checkReturnPageDisplay("流行女裝");
     
    //return fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937892] Click to return to the icon L4 layer classification", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);
     
    //go coat category
    Action.goCoatCategory();
    $.delay(sleep);
     
    Action.tapSearchIconOnNavBar();
    Action.tapReturnOnSearchBar();
     
    Assert.checkReturnPageDisplay("上衣");
    $.delay(sleep);
     
    //go back coat category
    Action.tapBackSubclassification();
     
    //go back fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937896] View the search results page", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
     
    //click search and input "JJHGHKJHHHHHJJJJJJHG"
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("JJHGHKJHHHHHJJJJJJHG");
    Action.tapKeyboardSearch();
    $.delay(5);
     
    //Validate the input “JJHGHKJHHHHHJJJJJJHG” , no search Suggestions
    Assert.longtextSearchPageDisplay();
    $.delay(sleep);
    Action.goBackOnSearchPage();
    
    //return fashion women's clothing category
    Action.tapReturnOnSearchBar();
    $.delay(sleep);
     
    //return fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

//04-28-2014
test("[1937905] View the search results page", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //tap goods button on tableviews
    Action.tapGoodsButton();
    Action.tapSearchIconOnNavBar();
    $.delay(sleep);
     
    Action.searchBarInput("JJHHJHUIUUH");
    $.delay(sleep);
     
    Assert.searchSuggestionsPageDisplay();
     
    Action.tapReturnOnSearchBar();
    Action.backToAllCategory();
    Action.goDiscoveryStream();
});

test("[1937909] L4 classification search within", function () {
    Action.goApparelCategory();
    $.delay(sleep);
     
    //go fashion women's clothing category
    Action.goFashionWomenClothingCategory();
    $.delay(sleep);
     
    //go coat category
    Action.goCoatCategory();
    $.delay(sleep);
    Action.tapGoodsButton();
     
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("h");
    Action.tapKeyboardSearch();
     
    Assert.searchResultsPage("h")
     
    //verify search results on coat category
    Assert.coatCategorySearchResultsPageDisplayedInList();
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
     
    //go back coat category
    Action.tapBackSubclassification();
     
    //go back fashion women's clothing category
    Action.tapBackSubclassification();
     
    Action.backToAllCategory();
    Action.goDiscoveryStream();
    Action.cleanSearches();
     
});

test("[1937912] Check the search results", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInput("iphone");
    Action.tapKeyboardSearch();
     
    //verify type "iphone" show the correct
    Assert.checkTypeIphoneShowTheCorrect();
     
    Action.goBackOnSearchPage();
    Action.tapReturnOnSearchBar();
    Action.cleanSearches();
});