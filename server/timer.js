Meteor.setInterval(gameStartStatus, 5000);

//Update games.status from new, to active, to past based on current status and start and end dates
function gameStartStatus()
{
	var currentDate = new Date();

//identify new games that are now active
//call function to update status of each new game identified to active
	var newToActiveGames = Games.find({$and: [ {status: "new", startDate: {$lte: currentDate}, endDate: {$gt: currentDate}}] } ); 
	
	newToActiveGames.forEach(updateStatusToActive); 

//identify active games that are now past
//call function to update status of each active game identified to past
	var activeToPastGames = Games.find({$and: [ {$or: [{status: "active", status: "new"}], startDate: {$lte: currentDate}, endDate: {$lte: currentDate}}] } ); 

//	activeToPastGames.forEach(updateGameStatus,"past"); 
	activeToPastGames.forEach(updateStatusToPast); 

}

function updateGameStatus(game, newStatus) {
	console.log("In updateStatus function: " + game.title);
	Games.update({_id: game._id}, { $set: {status: newStatus}});
}


function updateStatusToActive(game) {
	console.log("In new to active function: " + game.title);
	Games.update({_id: game._id}, { $set: {status: "active"}});
}

function updateStatusToPast(game) {
	console.log("In active to past loop: " + game.title);
	Games.update({_id: game._id}, { $set: {status: "past"}});
}






//delete this function when done testing
function gameTitleStatus()
{
	var testTitleGames = Games.find({title: "Test 1"});
	testTitleGames.forEach(updateTitle);

	function updateTitle(game) {
		console.log("In testTitle loop: " + game.title);
		Games.update({_id: game._id}, { $set: {title: "Updated Test 1"}});
	}


}
