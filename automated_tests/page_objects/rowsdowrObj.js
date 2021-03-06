define(function(require) {

    function rowsdowrObj(remote) {
        this.remote = remote;
    };

    var timer = 10000;

    rowsdowrObj.prototype = {
        constructor: rowsdowrObj,

        // Click link
        clickLink: function(linkText) {
            return this.remote
                .setFindTimeout(timer)
                .findDisplayedByLinkText(linkText)
                .click()
                .end()
                .getCurrentUrl()
                .then(function(url) {
                    return url;
                });
        },

        // Click first post
        firstPost: function() {
            return this.remote
                .setFindTimeout(timer)
                .findDisplayedByCssSelector('div.post')
                .click()
                .end()
                .getCurrentUrl()
                .then(function(url) {
                    return url;
                });
        },

    };
    return rowsdowrObj;
});
