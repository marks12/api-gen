/**
 * entity controllers
 */

module.exports = {
    getController: function () {

        var get = function(req, res) {
            res.send('Get a list of entity');
        };

        var post = function(req, res) {
            res.send('Add new row to entity');
        };

        var put = function(req, res) {
            res.send('Update entity');
        };

        var del = function(req, res) {
            res.send('Delete row from entity');
        };

        return {
            get: get,
            post: post,
            put: put,
            delete: del
        }
    }
};

