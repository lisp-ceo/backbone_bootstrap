define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/base/header.html'
], function($, _, Backbone, headerMenuTemplate){
  var HeaderMenuView = Backbone.View.extend({
    el: '#menu',
    initialize: function () {
    },
    render: function () {
      $(this.el).html(headerMenuTemplate);
      $('a[href="' + window.location.hash + '"]').addClass('active');
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  });

  return HeaderMenuView;
});

