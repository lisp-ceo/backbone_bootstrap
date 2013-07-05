/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Default 'page' in the application.
 *
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/base/page.html'
], function($, _, Backbone, homePageTemplate){
  var HomePage = Backbone.View.extend({
    el: '#page',
    render: function () {
      $(this.el).html(homePageTemplate);
    }
  });
  return HomePage;
});

