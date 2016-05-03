/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function (dataConfig) {

        var path = require('path');
        var fs = require('fs');
        var generator = require('./generator.js');

        generator.create(dataConfig,'model');

        var replaceText = function (file, replace, replacement) {

            fs.readFile(file, 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }
                var result = data.replace(new RegExp(replace,'g'), replacement);

                fs.writeFile(file, result, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });

        };

        var updateModel = function (file, model) {

            for(var i = 0; i<dataConfig.entities.length; i++) {

                if(dataConfig.entities[i].nameMany.toLowerCase() == model) {

                    var currentModel = dataConfig.entities[i].fields;

                    var fieldsStr = '';

                    for(var j = 0; j<dataConfig.entities[i].fields.length; j++) {

                        var fieldName = dataConfig.entities[i].fields[j].name.toLowerCase();
                        var fieldType = dataConfig.entities[i].fields[j].type.toUpperCase();

                        var types = {
                            DECIMAL: true,
                            BLOB: true,
                            STRING: true,
                            CHAR: true,
                            TEXT: true,
                            INTEGER: true,
                            BOOLEAN: true,
                            DATE: true,
                            BIGINT: true,
                            REAL: true,
                            'DOUBLE PRECISION': true,
                            FLOAT: true,
                            GEOMETRY: true,
                            GEOGRAPHY: true,
                            HSTORE: false,
                            RANGE: false
                        };

                        if(!types.hasOwnProperty(fieldType) || !types[fieldType]) {
                            console.log('unsupported data type', fieldType, 'for field: ',fieldName);
                        } else {
                            fieldsStr += fieldName + ': DataTypes.' + fieldType + ',\n\t\t';
                        }
                    }

                    if(fieldsStr.length)
                        replaceText(file, '//fields', fieldsStr);
                }
            }

        };

        var listModels = function () {

            var folder = __dirname + '/../../..' + '/api/models';
            var files = fs.readdirSync(folder);

            if(files) {
                for (var i = 0; i < files.length; i++) {

                    var model = path.basename(files[i]);
                    if (model !== 'models.js') {

                        console.log('update field', model.substring(0, model.length - 3));

                        updateModel(folder + '/' + files[i], model.substring(0, model.length - 3));
                    }
                }
            }
        };

        listModels();

    }
}