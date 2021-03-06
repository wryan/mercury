Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('gameSubmit', {path: 'gameSubmit'});
    this.route('gamesList', {path: 'gamesList'});
    this.route('postsList', {path: '/'});
    this.route('postSubmit', {path: 'postSubmit'});
    this.route('postPage', {
        path: 'posts/:_id',
        data:function(){ return Posts.findOne(this.params._id);}
    });
    this.route('gamePage', {
        path: 'game/:_id',
        data:function(){ return Games.findOne(this.params._id);}
    });

    this.route('inningPage', {
        path: 'inning/:_id',
        data:function(){ return Innings.findOne(this.params._id);}
    });
    this.route('ideaSubmit', {path: 'ideaSubmit'});
    this.route('stats');
    this.route('rules');

});

