/**
 * set exists routes
 */
var fs = require('fs');
var path = require('path');

module.exports = {

    setRoutes: function (app) {
        var files = fs.readdirSync(__dirname);

        if(files) {
            for (var i = 0; i < files.length; i++) {

                if (path.basename(files[i]) !== 'routes.js') {

                    var route = require('./' + files[i]);
                    route.setRoute(app);
                }
            }
        }
    }
};