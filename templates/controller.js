/**
 * entity controllers
 */

var db = require('../models/models.js');
var Entity = db.sequelize.models.Entity;

module.exports = {
    getController: function () {

        var get = function(req, res) {

            Entity.findAll().then(function(items) {
                res.send({
                    success: true,
                    data: items,
                    pagination: {}
                });
            });
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

