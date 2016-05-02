/**
 * entity controllers
 */

module.exports = {
    setRoute: function (app) {
        app.route('/entity')
            .get(function(req, res) {
                res.send('Get a list of entity');
            })
            .post(function(req, res) {
                res.send('Add a entity');
            })
            .delete(function(req, res) {
                res.send('Delete a entity');
            })
            .put(function(req, res) {
                res.send('Update the entity');
            });
    }
};

