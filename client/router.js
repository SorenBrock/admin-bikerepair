Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.render('loginPage');
    } else {
        this.next();
    }
});

Router.route('/', function () {
    this.render('main');
});

Router.route('/articlelist', {
    template: 'articlelist'
});

Router.route('/articlecreate', {
    template: 'articlecreate'
});

Router.route('/articleedit/:_id', {
    template: 'articleedit',
    data: function () {
        var article = Article.findOne({
            _id: this.params._id
        });
        Session.set('selectedArticle', article);
        return {
            article: article
        };
    }
});

Router.route('/taglist', {
    template: 'taglist'
});

Router.route('/tagcreate', {
    template: 'tagcreate'
});

Router.route('/tagedit/:_id', {
    template: 'tagedit',
    data: function () {
        return {
            tag: Tag.findOne({
                _id: this.params._id
            }),
        };
    }
});

Router.route('/categorylist', {
    template: 'categorylist'
});

Router.route('/categorycreate', {
    template: 'categorycreate'
});

Router.route('/categoryedit/:_id', {
    template: 'categoryedit',
    data: function () {
        return {
            category: Category.findOne({
                _id: this.params._id
            }),
        };
    }
});