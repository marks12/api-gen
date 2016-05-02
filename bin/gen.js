#!/usr/bin/env node
(function() {
    var cli, colors, err, pkg, program;
    program = require("commander");
    colors = require("colors");
    pkg = require("../package.json");

    program.version(pkg.version)
        .option("-a, --all", "generate models and CRUD controllers")
        .option("-m, --models", "generate models")
        .option("-c, --controllers", "generate controllers")
        .option("-r, --routes", "generate routes")
        .option("-r, --folders", "generate folders");

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

            if(program.all) {
                console.log('start generate All');
            }

            if(program.models) {
                console.log('Generate models');
            }

            if(program.controllers) {
                console.log('Generate controllers');
            }

            if(program.routes) {
                console.log('Generate routes');
            }

            if(program.folders) {
                console.log('Generate folders');
            }

        } catch (_error) {
            err = _error;
            console.log("[", "gen-error".blue, "]",       err.toString().red);
        }
    }
}).call(this);