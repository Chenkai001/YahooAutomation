test("[1952838] user can access my account page", function () {
    Action.goMyAccount();
    Assert.MyAccount();
});
test("[1959544] user can access my Ecoupons page", function () {
    Action.goMyAccount();
    Action.tapEcoupons();
});
test("[1959548] user login out and login in normal", function () {
    Action.goMyAccount();
    Action.Logout();
    Action.goMyAccount();
    Action.Login();
    Assert.MyAccount();
});
test("[1959545] user can query the order details ", function () {
    Action.goMyAccount();
    Action.tapOrder();
    Assert.Order();
});
test("[1961795] user can access itempage when click product collection from myaccount", function () {
    Action.goMyAccount();
    Action.tapItemCollection();
    Action.tapProduct();
});
