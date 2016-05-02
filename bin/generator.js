/**
 * Created by tsv on 02.05.16.
 */
/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function (dataConfig, part) {

        var fs = require('fs');

        var partMaker = function (item) {

            var fs = require('fs');

            if(dataConfig.entities) {

                for (var i = 0; i < dataConfig.entities.length; i++) {

                    var entity = dataConfig.entities[i].nameMany.toLocaleLowerCase();
                    var routeContent = item.toString().replace(/entity/g, dataConfig.entities[i].nameMany.toLocaleLowerCase());

                    fs.writeFile(
                        __dirname + '/../../..' + '/api/' + part + 's/' + entity + '.js',
                        routeContent,
                        function (err,data) {
                            if (err) {
                                return console.log(err);
                            }
                        });
                }
            }
        };

        var createParts = function (parts) {

            var item = fs.readFileSync(__dirname + '/../templates/' + part + '.js');
            partMaker(item);

            if(parts) {

                fs.writeFile(
                    __dirname + '/../../..' + '/api/' + part + 's/' + part + 's.js',
                    parts.toString(),
                    function (err,data) {
                        if (err) {
                            return console.log(err);
                        }
                    });
            }
        };

        var parts = null;

        if(fs.existsSync(__dirname + '/../templates/' + part + 's.js')) {
            parts = fs.readFileSync(__dirname + '/../templates/' + part + 's.js');
        }
        createParts(parts);
    }
};