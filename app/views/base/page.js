// Template for default pages

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/base/page.html'
], function($, _, Backbone, dashboardPageTemplate){
  var DashboardPage = Backbone.View.extend({
    el: '#page',
    render: function () {
      $(this.el).html(dashboardPageTemplate);
    }
  });
  return DashboardPage;
});
