Template.ideaSubmit.events({
 'submit form':function(e){
       e.preventDefault();
       var idea = {
            ideaText: $(e.target).find('[name=ideaText]').val(),
            submitted: new Date(),
	    ideaOwner: Meteor.user().username,
	    gameId: this.gameId,
	    inningId: this._id
        };
	//debugger;
	var idea_id =  Ideas.insert(idea);

	}
});
