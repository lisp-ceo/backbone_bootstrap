/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Application routing. Add more routes to the `routes` object, listen for
 *  the polling of routes using the `router` object
 *        
 *
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {

  var AppRouter = Backbone.Router.extend({
    routes: {

      'home': 'home',
      'yoloSwaggins' : 'yoloSwaggins',

      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){

    // TODO: Generate route dynamically. Involves deep-dive into Backbone as routes are dynamically updated
    // TODO: options.appContainer is too static. 

    var appContainer = options.appContainer;
    var router = new AppRouter(options);

    // Add more routes here as needed

    router.on('route:defaultAction', function (actions) {
      require(['views/base/page'], function (DefaultPage) {
        var defaultPage = Vm.create(appContainer, 'DefaultPage', DefaultPage);
        defaultPage.render();
      });
    });

    Backbone.history.start();

  };
  return {
    initialize: initialize
  };
});
