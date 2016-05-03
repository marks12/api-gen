'use strict';
/**
 * Created by tsv on 02.05.16.
 */

//linked_associations

module.exports = function(sequelize, DataTypes) {
    var Entity = sequelize.define('Entity', {
        //fields
    }, {
        classMethods: {
            associate: function(models) {
                //associations
            }
        }
    });

    sequelize.sync().then(function(){});

    return Entity;
};