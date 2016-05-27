Meteor.publish('allTags', function(){
    return Tag.find();
});

Meteor.publish('allCategories', function(){
    return Category.find();
});

Meteor.publish('allArticles', function(){
    return Article.find();
});