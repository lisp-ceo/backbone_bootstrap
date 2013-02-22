define([
  'jquery',
  'lodash',
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
      var that = this;
      $(this.el).html(layoutTemplate);
      require(['views/base/menu'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });
      require(['views/base/footer'], function (FooterView) {
        // Pass the appView down into the footer so we can render the visualisation
        var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
        footerView.render();
      });
    
    }
  });
  return AppView;
});

