Innings = new Meteor.Collection('innings');

Meteor.methods({
	createInning: function(inningAttributes) {
//		var game = Games.findOne(inningAttributes);
	
		var inning = {
			gameId: inningAttributes.gameId,
			inningNumber: inningAttributes.inningNumber,
			theme: ""
		}	

	return Innings.insert(inning);
	}


//	setInningTheme: function(inningAttributes) {
//		var inning = Innings.findOne
//			gameId: inningAttributes.gameId,
//			inningNumber: inningAttributes.inningNumber,
//			theme: inningAttributes.theme
//		}	
//
//	return Innings.insert(inning);
//	}


});