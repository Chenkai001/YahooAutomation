test("[1952834] user can use favorite items", function () {
    //add Favorite Item
    Action.addFavoriteItems();

    //check Favorite Item
    Action.goMyAccount();
    Action.tapItemCollection();
    Assert.FavoriteItems();
    //del Favorite Item
    Action.delFavoriteItems();
});
