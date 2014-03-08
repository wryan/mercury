Template.postItem.helpers({
    commentsCount: function() {
        return Comments.find({postId: this._id}).count();
    }
});

Template.postItem.events({
    'click .upvote': function(){
        alert("Help");
        votes = {$inc: {votes: 1}};
        return votes;
        Posts.update(votes);
    }
});


