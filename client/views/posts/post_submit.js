Template.postSubmit.events({
    'submit form':function(e){
        e.preventDefault();
        var post = {
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val(),
            submitted: new Date()

        };
        alert("Submitted");
        post._id =  Posts.insert(post);
            Router.go('postsList');

    }
});




