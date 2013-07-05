// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'events'
], function($, _, Backbone, Events){

  var views = {}; // Object containing views

  var destroy = function (context, name, View, options){
    views[name].undelegateEvents();
  };

  var create = function (context, name, View, options) {
    if(typeof views[name] !== 'undefined') {
      views[name].undelegateEvents();
      if(typeof views[name].clean === 'function') {
        views[name].clean();
      }
    }
    var view = new View(options);
    views[name] = view;
    if(typeof context.children === 'undefined'){
      context.children = {};
      context.children[name] = view;
    } else {
      context.children[name] = view;
    }
    Events.trigger('viewCreated');
    return view;
  };
  
  return {
    create  : create,
    destroy : destroy,
    views   : views
  };
});
