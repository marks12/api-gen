/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function (dataConfig) {

        var fs = require('fs');

        var routeMaker = function (route) {

            var fs = require('fs');

            if(dataConfig.entities) {

                for (var i = 0; i < dataConfig.entities.length; i++) {

                    var entity = dataConfig.entities[i].nameMany.toLocaleLowerCase();
                    var routeContent = route.toString().replace(/entity/g, dataConfig.entities[i].nameMany.toLocaleLowerCase());

                    fs.writeFile(
                        __dirname + '/../../..' + '/routes/' + entity + '.js',
                        routeContent,
                        function (err,data) {
                            if (err) {
                                return console.log(err);
                            }
                        });
                }
            }
        };

        var createRoutes = function (routes) {

            var route = fs.readFileSync(__dirname + '/../templates/route.js');
            routeMaker(route);

            fs.writeFile(
                __dirname + '/../../..' + '/routes/routes.js',
                routes.toString(),
                function (err,data) {
                    if (err) {
                        return console.log(err);
                    }
                });

        };

        var routes = fs.readFileSync(__dirname + '/../templates/routes.js');
        createRoutes(routes);
    }
};