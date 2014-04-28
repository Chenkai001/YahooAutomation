test("[1952837] user can use shopping cart list", function () {
    Action.goMyAccount();
    Action.Logout();
    Action.goShoppingCart();
    Action.Login();
    Assert.ShoppingCartList();
});
