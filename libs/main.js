Tag = new Meteor.Collection('tags');
Category = new Meteor.Collection('categories');
Article = new Meteor.Collection('articles');

Meteor.methods({
    'removeArticle': function (id) {
        Article.remove(id);
    },
    'updateArticle': function (id, name, info, category, tagarray, active) {
        Article.update({
            _id: id
        }, {
            $set: {
                name: name,
                info: info,
                category: category,
                tags: tagarray,
                active: active
            }
        });
    },
    'insertArticle': function (name, info, category, tagarray, active) {
        Article.insert({
            name: name,
            info: info,
            category: category,
            tags: tagarray,
            active: active
        });
    },
    'removeCategory': function (id) {
        Category.remove(id);
    },
    'updateCategory': function (id, name, info, active) {
        Category.update({
            _id: id
        }, {
            $set: {
                name: name,
                info: info,
                active: active
            }
        });
    },
    'insertCategory': function (name, info, active) {
        Category.insert({
            name: name,
            info: info,
            active: active
        });
    },
    'removeTag': function (id) {
        Tag.remove(id);
    },
    'updateTag': function (id, name, active) {
        Tag.update({
            _id: id
        }, {
            $set: {
                name: name,
                active: active
            }
        });
    },
    'insertTag': function (name, active) {
        Tag.insert({
            name: name,
            active: active
        });
    },
    'isUserAdmin': function (id) {
        var acceptedIds = ['FLXe2KCozm4kA7FnF','o7m8aPXwhdKvD2o5p','47pNjS2cxHA3KPTsF'];
        return  (acceptedIds.indexOf(id) > -1);
    }
});