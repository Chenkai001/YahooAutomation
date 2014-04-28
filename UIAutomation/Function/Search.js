/**test("[1937852] click on the search", function () {
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
     Assert.backButtonOnSearchBar();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});

test("[1937856] Click to return to the icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     $.delay(sleep);
     Assert.checkReturnPageDisplay();
});

test("[1937857] Auto complete function", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     Assert.autoCompletePageDisplay();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});

test("[1937858] Auto complete layout view", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     Assert.checkIconPlusDisplay();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});

test("[1937859] Click the auto - complete list right side '+' Icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     Action.tapIconPlusOnTableView();
     $.delay(sleep);
     
     //check the auto - complete list right side '+' Icon
     Assert.textIsEnabled("hl中大尺碼");
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});

test("[1937860] Click on the search for 2 times suggest different keyword '+' icon on the right", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     
     //Click on the different icon plus
     Action.clickOnTheDifferentIconPlus();
     $.delay(sleep);
     
     // check different keyword '+' icon on the right
     Assert.textIsEnabled("hl中大尺碼");
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});
**/
 test("[1937861] According to the search Suggestions", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapIconPlusOnTableView();
     Action.tapKeyboardSearch();
     $.delay(5);
     
     //Check the search results page display properly
     
     Assert.searchResultsPage();
     $.delay(sleep);
     Action.goBackOnSearchPage();
     Action.tapBackOnSearchBar();
     Action.cleanSearches();
});
/**
test("[1937862] No keyword, see clear input icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     $.delay(sleep);
     
     //check clean icon display
     Assert.checkCleanIconDisplay();
     $.delay(5);
     app.mainWindow().logElementTree();
     Action.tapBackOnSearchBar();
});

test("[1937863] Have a keyword, see clear input icon display", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     
     //Verify whether the clean button
     Assert.checkCleanIcon();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});

test("[1937864] Click remove input icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapClean();
     
     //Verify whether to remove the search box
     Assert.textIsEnabled("搜尋全部商品");
     $.delay(sleep);
     Action.tapBackOnSearchBar();
});
     
test("[1937865] Check the keyboard to remove function", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("1234");
     $.delay(sleep);
     Action.tapKeyboardDelete();
     
     //Verify whether the clear one character at a time
     Assert.checkEveryDelete();
     Action.tapBackOnSearchBar();
});

test("[1937866] Enter a keyword search", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapKeyboardSearch();
     $.delay(sleep);
     Assert.checkSearchPage("\"h\"");
     $.delay(sleep);
     Action.goBackOnSearchPage();
     Action.tapBackOnSearchBar();
     
     //Remove searches
     //Action.cleanSearches();
});


test("[1937867] Type in Chinese to check auto complete", function () {
    Action.tapSearchIconOnNavBar();
    Action.searchBarInputChinese();
    Assert.autoCompletePageDisplay();
    Action.tapBackOnSearchBar();
});

test("[1937873] Check list recent search for '+' icon on the right side", function () {
     //Click on search and input “h”
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapKeyboardSearch();
     $.delay(sleep);
     Action.goBackOnSearchPage();
     Action.tapBackOnSearchBar();
     
     //Click on the plus to validate recent search record is added to the right
     Action.tapSearchIconOnNavBar();
     Action.tapIconPlusOnFirstFloorTableView();
     Assert.textIsEnabled("h")
    
     //Clean searches
     Action.tapBackOnSearchBar();
     //Action.cleanSearches();
});

test("[1937874] At the most recent search keyword search", function () {
     //Click on search and input “h”
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("hp");
     Action.tapKeyboardSearch();
     $.delay(sleep);
     Action.doubleClickBackButton();
     $.delay(sleep);
     
     //Enter the search page
     Action.tapSearchIconOnNavBar();
     $.delay(sleep);
     Action.tapIconPlusOnFirstFloorTableView();
     Action.tapKeyboardSearch();
     $.delay(sleep);
     Assert.searchResultsPage();
    
     //Clean searches
     Action.goBackOnSearchPage();
     Action.tapBackOnSearchBar();
     //Action.cleanSearches();
});

test("[1937875] No search Suggestions according to look at it", function () {
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("yeruieujeueu");
     
     //Validate the input “yeruieujeueu” , no search Suggestions
     Assert.searchSuggestionsPageDisplay();
     Action.tapBackOnSearchBar();
});

test("[1937876] No recent search shows that view", function () {
     Action.tapSearchIconOnNavBar();
     Assert.searchSuggestionsPageDisplay();
     Action.tapBackOnSearchBar();
});

test("[1937877] Click on the recent twice different keyword search for the right '+'", function () {
     //Click on search and input “h”
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapKeyboardSearch();
     $.delay(sleep);
     Action.doubleClickBackButton();
     
     //double tap plus
     Action.tapSearchIconOnNavBar();
     Action.clickOnTheDifferentIconPlusOnFirstFloorTableView();
     Assert.textIsEnabled("hl中大尺碼")
     
     //Clean searches
     Action.tapBackOnSearchBar();
     //Action.cleanSearches();
});**/