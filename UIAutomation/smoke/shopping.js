test("[1952830] user can use shopping cart", function () {
    Action.goItemPage();
    Action.addShoppingCart();
    Action.goShoppingCart();
    Assert.ShoppingCart();
    Action.nextBuy();
    Action.goShoppingCart();
    Assert.nextBuyShoppingCart();
    Action.delShoppingCart();
});
