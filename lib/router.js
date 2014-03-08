Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('postsList', {path: '/'});
    this.route('postSubmit',{path: 'postSubmit'});
    this.route('postPage', {
        path: 'posts/:_id',
        data:function(){ return Posts.findOne(this.params._id);}
    });
    this.route('stats');
    this.route('rules');

});

