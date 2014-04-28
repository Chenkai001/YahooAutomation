Action.goDiscovery = function () {
    $.delay(sleep);
    $.backgroundApp(2);
    tabBarDiscoveryStream.tap();
    $.delay(6);
    obj.scrollDowns(5);
};
