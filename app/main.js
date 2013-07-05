require.config({
  shim : {
  
    'backbone' : {
      
      deps : ['underscore','jquery'],
      exports : 'Backbone'

    },

    'underscore' : {
      exports : '_'
    }
  
  },

  paths: {
    //
    // Major libraries
    "jquery": '../node_modules/jquery/tmp/jquery',
    "underscore": '../node_modules/underscore/underscore', 
    "backbone": '../node_modules/backbone/backbone',
    "text": '../node_modules/text/text',
    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    "templates": '../../templates'
  }

});

require([
  'views/app',
  'router',
  'vm',
  'underscore',
  'backbone'
], function(AppView, Router, Vm, _, Backbone){
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});
