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
    
    // Default - catch all
    '*actions': ['defaultAction','views/backbone/page','DefaultPage']
  }
  var AppRouter = Backbone.Router.extend({
    routes: urls
  });

  var generate_routing_table = function(options){
    var router = new AppRouter(options);
    for(url in urls){
      var route_regex = url[0], 
          view_path = url[1],
          view_name = url[2];
      router.on('route:'+route_regex, function (section) {
        require(view_path, function (BackbonePage) {
          var backbonePage = Vm.create(appView, view_name, BackbonePage, {section: section});
          backbonePage.render();
        });
      });
    }
  };

  var initialize = function(options){
    var appView = options.appView;
    generate_routing_table();
    //router.on('route:defaultAction', function (actions) {
    //  require(['views/dashboard/page'], function (DashboardPage) {
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
