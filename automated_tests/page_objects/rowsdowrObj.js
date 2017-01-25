define(function(require) {

    function rowdowrObj(remote) {
        this.remote = remote;
    };

    var timer = 5000;

    rowdowrObj.prototype = {
        constructor: rowdowrObj,

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

    };
    return rowdowrObj;
});
