if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        message: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        message: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        message: 'http://themeteorbook.com'
    });
}

Comments.insert({
    body: 'Interesting project Sacha, can I get involved?'
});

Comments.insert({
    body: 'You sure can Tom!'
});