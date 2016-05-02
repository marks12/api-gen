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
        .option("-m, --models", "generate models")
        .option("-c, --controllers", "generate controllers")
        .option("-r, --routes", "generate routes")
        .option("-f, --folders", "generate folders")
        .option("-p, --app", "generate app.js main application file")
        .option("-d, --addData", "generate data file with entity file description");

    program.on("-help", function() {
        console.log("Examples:");
        console.log("");
        console.log(" $ " + "gen" + " --all");
    });
    program.parse(process.argv);

    if (process.argv.length === 2) {
        program.help();
    } else {
        try {

            var dataConfig = data.load(fs);

            if(dataConfig) {

                if(program.all) {
                    console.log('start generate All');
                }

                if(program.models) {
                    console.log('Generate models');
                }

                if(program.controllers) {
                    var controllers = require('./controllers.js');
                    controllers.create(dataConfig);
                }

                if(program.routes) {

                    console.log('Generate routes');

                    var route = require('./routes.js');
                    route.create(dataConfig);
                }

                if(program.folders) {
                    folder.create();
                }

            } else {

                if(program.addData) {
                    console.log('Generate folders');
                }
            }

        } catch (_error) {
            err = _error;
            console.log("[", "gen-error".blue, "]",       err.toString().red);
        }
    }
}).call(this);