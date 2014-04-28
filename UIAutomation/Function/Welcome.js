test("Welcomen page test script, need run this script before all other scripts", function () {
	$.delay(sleep);

	//Verify elements on Welcome screen show correct.
	Assert.verifyWelcomeScreen();

	//Tap "略過，前往下一步" button.
	Action.tapNextButtonOnWelcomeScreen();
	$.delay(sleep);

	//Verify elements on Personal category show correct.
	Assert.personalCategoryScreen();

	//Tap "建立個人化的購物體驗"
	Action.tapCreatePersonalExperience();
	$.delay(5);

	//Verify screen successful navigate to "最新動態" screen.
	Assert.discoveryScreenShowCorrect();
});