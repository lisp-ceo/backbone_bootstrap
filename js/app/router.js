// Defines all the routes for the site

define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var urls = {
    //'modules': 'modules',
    //'optimize': 'optimize',
    //'backbone/:section': 'backbone',
    //'backbone': 'backbone',
    //'manager': 'manager',
    '*actions': ['defaultAction','views/base/page','DashboardPage']
  };
  var old_urls = {
    '*actions': 'defaultAction'
  };
  var AppRouter = Backbone.Router.extend({
    routes: old_urls
  });

  var generate_routing_table = function(options){
    var generated_router = new AppRouter(options);
    var appView = options.appView;
    for(var url in urls){
      var route_regex = urls[url][0];
      var view_path = urls[url][1];
      var view_name = urls[url][2];
      generated_router.on('route:'+route_regex, function (section) {
        require([view_path], function (BackbonePage) {
          var backbonePage = Vm.create(appView, view_name, BackbonePage, {section: section});
          backbonePage.render();
        });
      });
    }
    return generated_router;
  };

  var initialize = function(options){
    //var router = new AppRouter(options);
    //var appView = options.appView;
    var router = generate_routing_table(options);
    //router.on('route:defaultAction', function (actions) {
    //  require(['views/base/page'], function (DashboardPage) {
    //    var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
    //    dashboardPage.render();
    //  });
    //});
    //router.on('route:modules', function () {
    // require(['views/modules/page'], function (ModulePage) {
    //    var modulePage = Vm.create(appView, 'ModulesPage', ModulePage);
    //    modulePage.render();
    //  });
    //});
    //router.on('route:backbone', function (section) {
    //  require(['views/backbone/page'], function (BackbonePage) {
    //    var backbonePage = Vm.create(appView, 'BackbonePage', BackbonePage, {section: section});
    //    backbonePage.render();
    //  });
    //});
    //router.on('route:manager', function () {
    //  require(['views/manager/page'], function (ManagerPage) {
    //    var managerPage = Vm.create(appView, 'ManagerPage', ManagerPage);
    //    managerPage.render();
    //  });
    //});
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
