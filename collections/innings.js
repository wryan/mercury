Innings = new Meteor.Collection('innings');

Meteor.methods({
	createInning: function(inningAttributes) {
		var inning = {
			gameId: inningAttributes.gameId,
			inningNumber: inningAttributes.inningNumber,
			theme: "",
			startDate: inningAttributes.startDate,
			endDate: inningAttributes.endDate,
			voteDate: inningAttributes.voteDate,
			status: "new",
			lastUpdateDate: new Date()			
		}	
	

	var inningId = Innings.insert(inning);
	return inningId;
	},

	updateTheme: function(newTheme){
		alert("in updateTheme function: " + newTheme);
		this.theme=newTheme;
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
