define(function(require) {

    function commonObj(remote) {
        this.remote = remote;
    };

    var timer = 3000;

    commonObj.prototype = {
        constructor: commonObj,

        // Load web page
        loadPage: function(url) {
            return this.remote
                .maximizeWindow()
                .get(require.toUrl(url))
                .refresh()
                .getCurrentUrl()
                .then(function(text) {
                    return text;
                });
        },

        // Refresh the browser
        refresh: function() {
            return this.remote
                .refresh();
        },

        // Explicit wait for 3 seconds
        wait3Seconds: function() {
            return this.remote
                .sleep(timer);
        },
    };
    return commonObj;
});
