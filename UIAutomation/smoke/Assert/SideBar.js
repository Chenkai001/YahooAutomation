Assert.SideBar = function () {
    this.sidebarname = [
        "mobileappstore2, mobileappstore2 is signed in with default image.",
        "編輯喜愛的分類",
        "Yahoo News Digest, Free",
        "Flickr, Free",
        "Yahoo Mail, Free",
        "Flickr, Free",
        "Yahoo Mail, Free",
        "Yahoo Sports, Free",
        "Yahoo Weather, Free",
        "Yahoo, Free",
        "Show 3 More",
        "Settings",
        "Send Feedback",
        "Share This App"
    ];
    $.delay(sleep);
    for (var i = 0; i < 14; i++) {
        if (i == 0)
            assertEquals(this.sidebarname[i], app.windows()[0].elements()[i].name());
        else
            assertEquals(this.sidebarname[i], app.windows()[0].tableViews()[0].cells()[i].name());
    }
    //$.log(app.windows()[0].tableViews()[0].cells()[13].name());
};
