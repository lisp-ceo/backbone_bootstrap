define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/sibling_node/page.html'
], function($, _, Backbone, dashboardPageTemplate){
  var DashboardPage = Backbone.View.extend({
    el: '#page',
    initialize: function(){
      console.log("called");
    },
    render: function () {
      console.log("Siblign called");
      $(this.el).html(dashboardPageTemplate);
    }
  });
  return DashboardPage;
});

