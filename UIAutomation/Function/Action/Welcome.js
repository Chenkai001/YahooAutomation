Action.tapNextButtonOnWelcomeScreen = function () {
    $.delay(sleep);
	var nextButton = app.mainWindow().buttons()[1];
	nextButton.tap();
};

Action.tapCreatePersonalExperience = function () {
	$.delay(sleep);
	var createPersonalExperienceButton = app.mainWindow().buttons()[0];
	createPersonalExperienceButton.tap();
};