/**
 * Sample OpenUI5 Progressive Web Application
 * Simple TODO list
 */
sap.ui.getCore().attachInit(function todoApp() {
	


	// Start application
	loadTasks();
	populateList();

	app.addPage(todoPage);
	app.setInitialPage("todoPage");

	document.getElementById("splash-screen").remove(); // delete the splash screen
	app.placeAt("body", "only");
});
