// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'modules': 'modules',
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){

    // TODO: Generate route dynamically. Involves deep-dive into Backbone as routes are dynamically updated

    var appView = options.appView;
    var router = new AppRouter(options);

    // Add more routes here as needed

    router.on('route:defaultAction', function (actions) {
      require(['views/base/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
    });
    router.on('route:modules', function () {
     require(['views/modules/page'], function (ModulePage) {
        var modulePage = Vm.create(appView, 'ModulesPage', ModulePage);
        modulePage.render();
      });
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
