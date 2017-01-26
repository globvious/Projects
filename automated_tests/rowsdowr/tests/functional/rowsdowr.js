define(function(require) {

    var registerSuite = require('intern!object'),
        assert = require('intern/chai!assert'),
        fs = require('intern/dojo/node!fs'),

        commonObj = require('../../../page_objects/commonObj'),
        rowsdowrObj = require('../../../page_objects/rowsdowrObj');

    registerSuite({
        name: 'Rowsdowr',

        setup: function() {
            contents = fs.readFileSync('tests/resources/info.json');
            info = JSON.parse(contents);

            commonObj = new commonObj(this.remote);
            rowsdowrObj = new rowsdowrObj(this.remote);
        },

        // Load web page
        loadWebpage: function() {
            return commonObj.loadPage(info.loadUrl1)
            .then(function(url) {
                assert.include(url, info.assertUrl1);
            });
        },

        // Click first post
        clickFirstPost: function() {
            return rowsdowrObj.firstPost()
            .then(function(url) {
                assert.notEqual(url, info.loadUrl1)
            });
        },

        // Click Horror link
        mst3kLink: function() {
            return rowsdowrObj.clickLink(info.link5)
            .then(function(url) {
                assert.include(url, info.assertUrl2);
            });
        },

    });
});
