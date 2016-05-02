/**
 * Created by tsv on 02.05.16.
 */
'use strict';
module.exports = function(sequelize, DataTypes) {
    var Entity = sequelize.define('Entity', {
        name: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });

    sequelize.sync().then(function(){});

    return Entity;
};