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
  'text!templates/layout.html'
], function($, _, Backbone, Vm, Events, layoutTemplate){

  var AppView = Backbone.View.extend({

    el: '#page',
    initialize: function () {
    
    },
    render: function () {

      var that = this;
      $(this.el).html(layoutTemplate);

      require(['views/base/header'], function (HeaderMenuView) {

        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();

      });

      require(['views/base/footer'], function (FooterView) {

        var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
        footerView.render();
      });
    
    }
  });
  return AppView;
});

