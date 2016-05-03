/**
 * entity routes
 */

module.exports = {
    setRoute: function (app) {

        var controller = require('../controllers/entity.js').getController();

        app.route('/api/entity')
            .get(controller.get)
            .post(controller.post);

        app.route('/api/entity/:id')
            .get(controller.one)
            .delete(controller.delete)
            .put(controller.put);
    }
};

