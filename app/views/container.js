/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Default view rendered for each 'page' in the application.
 *
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'events',
  'text!templates/base/layout.html'
], function($, _, Backbone, Vm, Events, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: '#container',
    initialize: function () {

    },
    render: function () {

      var containerCtx = this;
      $(this.el).html(layoutTemplate);

      require(['views/base/header'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(containerCtx, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });

      require(['views/base/footer'], function (FooterView) {
        // Pass the appView down into the footer so we can render the visualisation
        var footerView = Vm.create(containerCtx, 'FooterView', FooterView);
        footerView.render();
      });
    
    }
  });
  return AppView;
});

