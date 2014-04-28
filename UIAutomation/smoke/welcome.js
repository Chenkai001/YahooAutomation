test("[1952832] user can access welcome screen", function () {
    Assert.Welcome();
    Action.goFavoriteCategories();
    Assert.FavoriteCategories();
});
