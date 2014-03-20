Template.gamesList.helpers({
    activeGames: function() {
	return Games.find({status: "active"});
	
//        return Games.find({$and: [{startDate: {$lte: new Date()}, endDate: {$gte: new Date()}}]},{sort:{submitted: -1}, limit:5})
    },

 newGames: function() {
	return Games.find({status: "new"});
//       return Games.find({startDate: {$gt: new Date()}},{sort:{submitted: -1}, limit:5})
    },

 pastGames: function() {
	return Games.find({status: "past"});
//       return Games.find({endDate: {$lt: new Date()}},{sort:{submitted: -1}, limit:5})
    }
});
