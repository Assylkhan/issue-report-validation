'use strict';
var usersController = require('../controllers').users,
	 ordersController = require('../controllers').orders;
module.exports = function(app) {

  // user Routes
  app.route('/users')
    .get(usersController.list)
    .post(usersController.create);

  app.route('/users/:userId')
    .get(usersController.find)
    .put(usersController.update)
    .delete(usersController.destroy);

  app.route('/users/:userId/orders')
    .get(usersController.ordersByUserId);

//----------------------------------------
	
	// order Routes
  app.route('/orders')
    .get(ordersController.list)
    .post(ordersController.create);

};