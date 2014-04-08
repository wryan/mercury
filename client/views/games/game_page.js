Template.gamePage.helpers({

    activeInnings: function() {
	
	//return Innings.find({gameId: this._id},{sort:{inningNumber: 1}});
	return Innings.find({ $and: [ { gameId: this._id, status: { $in: ["ideaSubmission", "vote"]}}]}, {sort:{inningNumber: -1}});
},	
	
       // return Games.find({$and: [{startDate: {$lte: new Date()}, endDate: {$gte: new Date()}}]},{sort:{submitted: -1}, limit:5})
    

     pastInnings: function() {
	
	return Innings.find({ $and: [ { gameId: this._id, status: "past"} ] } );
//return Innings.find({gameId: this._id},{sort:{inningNumber: 1}});
//       return Games.find({endDate: {$lt: new Date()}},{sort:{submitted: -1}, limit:5})
    },

    comments: function() {
        return Comments.find({gameId: this._id});
    }
});
