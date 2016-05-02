/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function () {

        var fs = require('fs');

        function createFolder(path) {

            console.log('try to create '+path+' folder');
            try {
                fs.mkdirSync(path);
            } catch(e) {
                if ( e.code != 'EEXIST' ) throw e;
            }
            console.log('Success!');
        }

        if(!fs.existsSync('front'))             { createFolder('front');}

        if(!fs.existsSync('api'))               { createFolder('api');}
        if(!fs.existsSync('api/controllers'))   { createFolder('api/controllers');}
        if(!fs.existsSync('api/models'))        { createFolder('api/models');}
        if(!fs.existsSync('api/routes'))        { createFolder('api/routes');}

    },
    entity: function (entity) {

        if(!fs.existsSync('api/controllers/' + entity))   { createFolder('api/controllers/' + entity);}
        if(!fs.existsSync('api/models/' + entity))        { createFolder('api/models/' + entity);}

    }
};

