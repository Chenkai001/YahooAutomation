test("[1952829] user can checkout", function () {
    Action.goItemPage();
    Action.goCheckout();
    Action.runCheckout();
    Assert.Checkout();
});
