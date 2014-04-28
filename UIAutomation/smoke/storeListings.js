test("[1977446] user can access store listing", function () {
    Action.goFavoriteStores();
    Action.goStoreListing();
    Assert.StoreListings();
});
