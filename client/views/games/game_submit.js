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
	    status: "new"

        };

        game.endDate.setDate(game.startDate.getDate() + ((game.daysToSubmit+game.daysToVote)*game.numberInnings));  //Set endDate

//	alert("Days to submit: " + game.daysToSubmit + "\nDays to vote: " + game.daysToVote + "\nNumber of Innings: " + game.numberInnings + "\nSubmit + Vote: " + (game.daysToSubmit+game.daysToVote));
//        alert("Submitted. Days to play: " + (game.daysToSubmit+game.daysToVote)*game.numberInnings);

//	alert(Meteor.user().username);

	game._id =  Games.insert(game);
	
	var inningAttributes = {
		gameId: game._id,
		inningNumber: 0,
		theme: ""
	};

	//Create innings for game
	for (var i = 0; i < game.numberInnings; i++) {
		inningAttributes.inningNumber = i+1;
		Meteor.call('createInning', inningAttributes, function(error, inningId) {
			if (error) {
				throwError(error.reason);
			} else {
//			alert("Created inning #: " + i);
			}
		});
	}

	//Set theme for first inning	
	//inningAttributes.inningNumber = 1;
	//inningAttributes.theme = game.firstTheme;
	//Meteor.call('setInningTheme', inningAttributes, function(error, inningId) {
	

        Router.go('gamesList');

    }
});




