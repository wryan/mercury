Template.gameSubmit.events({
 'submit form':function(e){
       e.preventDefault();
       var game = {
            title: $(e.target).find('[name=title]').val(),
            startDate: new Date($(e.target).find('[name=startDate]').val()),
            daysToSubmit: Number($(e.target).find('[name=daysToSubmit]').val()),
            daysToVote: Number($(e.target).find('[name=daysToVote]').val()),
            numberInnings: Number($(e.target).find('[name=numberInnings]').val()),
            Strikes: Number($(e.target).find('[name=strikes]').val()),
	    endDate: new Date($(e.target).find('[name=startDate]').val()),
          //  firstTheme: $(e.target).find('[name=firstTheme]').val(),
	    message: $(e.target).find('[name=message]').val(),
            submitted: new Date(),
	    gameOwner: Meteor.user().username,
	    status: "new",
	   // innings: []

        };
	
	//Set game endDate based on start date, days to submit, days to vote, and number of innings
        game.endDate.setDate(game.startDate.getDate() + ((game.daysToSubmit+game.daysToVote)*game.numberInnings));  

	var game_id =  Games.insert(game);

	//initialize innings for this game
	initializeInningsForGame(game_id);

	//Games.update({_id: game_id}, { $set: {innings: inningIdList}});
	Router.go('gamesList');

	}
});

function initializeInningsForGame(game_id){

	//pull copy of game from Games collection
	var game = Games.findOne({_id: game_id});

	//initialize inningAttributes
	var inningAttributes = {
		gameId: game_id,
		inningNumber: 0,
		daysToSubmit: game.daysToSubmit,
		daysToVote: game.daysToVote,
		theme: "TBD",
		startDate: new Date(game.startDate),
		endDate: new Date(game.startDate),
		voteDate: new Date(game.startDate),
		status: "inactive",
		owner: "TBD"
	};


	//Create innings for game
	var inningIdList = [];	//store inning IDs to add to this Games collection	
	for (var i = 0; i < game.numberInnings; i++) {
		var inningId;
		inningAttributes.inningNumber = i+1;
		//set inning start date		
		inningAttributes.startDate = new Date(game.startDate);
		inningAttributes.startDate.setDate(inningAttributes.startDate.getDate() + ((game.daysToSubmit+game.daysToVote)*(inningAttributes.inningNumber-1)));
		
		//set inning end date		
		inningAttributes.endDate = new Date(game.startDate);
		inningAttributes.endDate.setDate(inningAttributes.endDate.getDate() + (game.daysToSubmit+game.daysToVote)*inningAttributes.inningNumber);

		//set date voting starts
		inningAttributes.voteDate = new Date(inningAttributes.startDate);
		inningAttributes.voteDate.setDate(inningAttributes.startDate.getDate() + game.daysToSubmit);

		Meteor.call('createInning', inningAttributes);
	}


	//add inning IDs to this Games collection
	//Games.update({_id: game_id}, { $set: {innings: inningIdList}});

	//Set theme for first inning	
	//inningAttributes.inningNumber = 1;
	//inningAttributes.theme = game.firstTheme;
	//Meteor.call('setInningTheme', inningAttributes, function(error, inningId) {
	

    

}





