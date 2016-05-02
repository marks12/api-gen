/**
 * entity routes
 */

module.exports = {
    setRoute: function (app) {

        var controller = require('../controllers/entity.js').getController();

        app.route('/api/entity')

            .get(controller.get)

            .post(controller.post)

            .delete(controller.delete)

            .put(controller.put);
    }
};

