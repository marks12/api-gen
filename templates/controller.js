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
            Entity.create(req.body).then(function(item){
                res.send({
                    success: true,
                    data: item
                });
            });
        };

        var put = function(req, res) {

            var row_id = parseInt(req.params.id);

            Entity.update(req.body, {
                where: {id : row_id}
            }).then(function() {
                Entity.findById(row_id).then(function(item) {
                    res.send({
                        success: true,
                        data: item
                    });
                });
            }, function(rejectedPromiseError){

            });
        };

        var one = function (req, res) {

            var row_id = parseInt(req.params.id);

            Entity.findById(row_id).then(function(item) {
                res.send({
                    success: true,
                    data: item
                });
            });
        };

        var del = function(req, res) {

            var row_id = parseInt(req.params.id);

            Entity.destroy({
                where: {id: row_id}
            }).then(function () {
                if (arguments['0']) {
                    res.send({
                        success: true
                    });
                } else {
                    res.status(404).send({
                        error: true,
                        msg: 'entity with id: ' + row_id + ' not found'
                    });
                }
            });
        };

        return {
            get: get,
            post: post,
            put: put,
            delete: del,
            one: one
        }
    }
};

