// Defines all the routes for the site

define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var urls = {
    'modules': ['defaultAction','views/base/page','DashboardPage'],
    '*actions': ['defaultAction','views/base/page','DashboardPage']
  };
  var AppRouter;

  var generate_routing_table = function(options){
    // TODO: Re-architect router to parse once
    // First parse Routes to generate the Router

    var approuter_routes = {};
    var appView = options.appView;
    for(var url in urls){
      var route_regex = urls[url][0];
      var view_path = urls[url][1];
      var view_name = urls[url][2];
      approuter_routes[url] = route_regex;
    }

    AppRouter = Backbone.Router.extend({
      routes:approuter_routes
    })

    // 2nd parse required as Router stores path information

    var generated_router = new AppRouter(options);

    for(var url in urls){
      var route_regex = urls[url][0];
      var view_path = urls[url][1];
      var view_name = urls[url][2];
      approuter_routes[url] = route_regex;
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
    var router = generate_routing_table(options);
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
