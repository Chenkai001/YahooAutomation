test("[1959536] user can use advance function", function () {
    Action.goCategorie();
});

test("[1952425] category and sub-category", function () {
    Action.goCategorie();
    Action.goSubcategory();
    Assert.subcategory();
});

test("[1959543] select size/specification for the item", function () {
    Action.goCategorie();
    Action.goSpecification();
});
