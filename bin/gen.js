#!/usr/bin/env node
(function() {

    var cli;
    var colors;
    var err;
    var pkg;
    var program;
    var fs;
    var data;
    var folder;

    program = require("commander");
    colors = require("colors");
    pkg = require("../package.json");
    fs = require('fs');
    data = require('./data.js');
    folder = require('./folder.js');

    program.version(pkg.version)
        .option("-a, --all", "generate models and CRUD controllers")
        .option("-z, --config", "generate db config in sequalize format")
        .option("-m, --models", "generate models")
        .option("-c, --controllers", "generate controllers")
        .option("-r, --routes", "generate routes")
        .option("-f, --folders", "generate folders")
        .option("-p, --app", "generate app.js main application file")
        .option("-d, --addData", "generate data file with entity file description");

    program.on("-help", function() {
        console.log("Examples:");
        console.log("");
        console.log(" $ " + "gen.js" + " --all");
    });
    program.parse(process.argv);

    if (process.argv.length === 2) {
        program.help();
    } else {
        try {

            var dataConfig = data.load(fs);

            var genControllers = function (dataConfig) {
                console.log('Generate controllers');
                var controllers = require('./controllers.js');
                controllers.create(dataConfig);
            };

            var genRoutes = function (dataConfig) {
                console.log('Generate routes');
                var route = require('./routes.js');
                route.create(dataConfig);
            };

            var genFolders = function () {
                console.log('Generate folders');
                folder.create();
            };

            var genConfig = function (dataConfig) {
                console.log('Generate db_config');
                var db_config = require('./db_config.js');
                db_config.create(dataConfig);
            };

            var genModel = function (dataConfig) {
                console.log('Generate models');
                var models = require('./models.js');
                models.create(dataConfig);
            };

            if(dataConfig) {

                if(program.all) {
                    genFolders();
                    genControllers(dataConfig);
                    genRoutes(dataConfig);
                    genConfig(dataConfig);
                    genModel(dataConfig);
                }

                if(program.models) {
                    genModel(dataConfig);
                }

                if(program.config) {
                    genConfig(dataConfig);
                }

                if(program.controllers) {
                    genControllers(dataConfig);
                }

                if(program.routes) {
                    genRoutes(dataConfig)
                }

                if(program.folders) {
                    genFolders();
                }

                if(program.app) {
                    // TODO need to create default app.js
                }

            } else {

                if(program.addData) {
                    console.log('Generate folders');
                    console.log('Cant generate any else. data.json file not exists');
                }
            }

        } catch (_error) {
            err = _error;
            console.log("[", "gen-error".blue, "]",       err.toString().red);
        }
    }
}).call(this);