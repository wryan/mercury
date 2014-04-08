Meteor.setInterval(inningStatus, 7500);

//Update games.status from new, to active, to past based on current status and start and end dates
function inningStatus()
{

	var currentDate = new Date();

	//identify new innings that are now in idea submission phase
	//call function to update status of each new inning identified to idea Submission
	var newToIdeaSubmissionInnings = Innings.find({$and: [ {status: "new", startDate: {$lte: currentDate}, voteDate: {$gt: currentDate}}] } ); 
	newToIdeaSubmissionInnings.forEach(updateStatusToIdeaSubmission); 

	//identify idea submission innings that are now in vote phase
	//call function to update status of each idea submission inning identified to vote
//	var ideaSubmissionToVoteInnings = Innings.find({$and: [ {$or: [{status: "new"} , {status: "ideaSubmission"}], voteDate: {$lte: currentDate}, endDate: {$gt: currentDate} } ] } ); 
	var ideaSubmissionToVoteInnings = Innings.find({$and: [ {status: { $in: ["new", "ideaSubmission"] }, voteDate: {$lte: currentDate}, endDate: {$gt: currentDate} }] } ); 
	debugger;
	ideaSubmissionToVoteInnings.forEach(updateStatusToVote); 


	//identify vote innings that are now past
	//call function to update status of each vote inning identified to past
	var voteToPastInnings = Innings.find({$and: [ {status: { $in: ["new", "ideaSubmission", "vote"] }, startDate: {$lte: currentDate}, endDate: {$lte: currentDate}}] } ); 
	voteToPastInnings.forEach(updateStatusToPast); 

}


function updateStatusToIdeaSubmission(inning) {
	console.log("In inning new to idea submission function: " + inning.inningNumber);
	Innings.update({_id: inning._id}, { $set: {status: "ideaSubmission"}});
}

function updateStatusToVote(inning) {
	console.log("In inning idea to vote function: " + inning.inningNumber);
	Innings.update({_id: inning._id}, { $set: {status: "vote"}});
}

function updateStatusToPast(inning) {
	console.log("In inning vote to past function: " + inning.inningNumber);
	Innings.update({_id: inning._id}, { $set: {status: "past"}});
}
