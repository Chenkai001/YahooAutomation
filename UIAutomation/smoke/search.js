test("[1959538] user can access item page from SRP", function () {
    Action.goItemPage();
});
test("[1961800] user change browser mode when scroll", function () {
    Action.goBrowserMode();
});

test("[1959539] user can access store page from SRP", function () {
    Action.goStorePage();
});

test("[Search & category item listings] user can access store page from SRP in category", function () {
    Action.goCategoryPage();
    Assert.CategoryPage();
});
