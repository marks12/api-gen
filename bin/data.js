/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    load: function (fs) {

        if(!fs.existsSync('./data.json')) {

            console.log('data.json file with models description is not exits in app root. Need to create!');
            return false;

        } else {

            console.log('data.json exists all good!');
            return require('./../../../data.json');
        }
    }
};

