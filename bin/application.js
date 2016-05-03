/**
 * Created by tsv on 03.05.16.
 */

module.exports = {
    create: function (dataConfig) {

        var fs = require('fs');

        var appSrcFile = __dirname + '/../templates/app.js';
        var appDstFile = __dirname + '/../../..' + '/api/app.js';

        fs.readFile(appSrcFile, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }

            var result = data.replace(new RegExp('3001','g'), dataConfig.app_port);

            fs.writeFile(appDstFile, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
    }
};