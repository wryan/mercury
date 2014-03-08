Template.commentSubmit.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            postId: template.data._id
        };
        alert("Comment Submitted");
        comment._id = Comments.insert(comment);
            Router.go('postList');

    }
});

