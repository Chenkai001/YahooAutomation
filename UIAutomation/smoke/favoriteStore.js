test("[1952839] user can access favorite stores and store discovery", function () {
    Action.addFavoriteStores();
    Action.goFavoriteStores();
    Assert.FavoriteStores();
    Action.tapFavoriteStores();
    Action.delFavoriteStores();
    Action.goFavoriteStores();
    Assert.delFavoriteStores();
});
