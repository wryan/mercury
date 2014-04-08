Template.inningPage.events({

//add a theme to the inning and update date of last update
'submit form':function(e){
	e.preventDefault();
	//alert("submit form function:" + $(e.target).find('[name=theme]').val());

	var newInningAttributes = {
		theme: $(e.target).find('[name=theme]').val(),
		lastUpdateDate: new Date()
	}

	Innings.update(this._id, {$set: newInningAttributes}, function (error) {
		if (error) {
			alert("error in updating theme");
		} else {
			//location.reload();
			//Router.go('inningPage', {_id: this.id});
		}
	});
}
});


Template.inningPage.helpers({
    inningDaysRemaining: function() {
	var today = new Date();
	var diff = Math.floor(this.endDate.getTime() - today.getTime());   
	var day = 1000*60*60*24;
	var days = Math.floor(diff/day);	
	if (days < 0) return 0;	
	return days;
    },

    totalInnings: function() {
	var inningGame = Games.findOne(this.gameId);
	return inningGame.numberInnings;
    },

    isStatusIdeaSubmit: function() {
	debugger;
	if (this.status === "ideaSubmission") {
		return true; }
	else {
		return false; }
    }

});

