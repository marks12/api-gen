/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function (dataConfig) {

        if(!dataConfig) {
            console.log('Data config not found. Please check');
        }

        var fs = require('fs');
        var configTpl = require('../config/config.json');

        configTpl.development.username = dataConfig.db_user;
        configTpl.development.password = dataConfig.db_pass;
        configTpl.development.database = dataConfig.database;

        // todo add test and prod passwords to file if need

        configTpl.test.username = dataConfig.db_user;
        configTpl.test.password = dataConfig.db_pass;
        configTpl.test.database = dataConfig.database;

        configTpl.production.username = dataConfig.db_user;
        configTpl.production.password = dataConfig.db_pass;
        configTpl.production.database = dataConfig.database;

        fs.writeFile(
            __dirname + '/../../..' + '/api/config/config.json',
            JSON.stringify(configTpl),
            function (err,data) {
                if (err) {
                    return console.log(err);
                }
            });

    }
};