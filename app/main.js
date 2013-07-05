/*
 *
 *  Author: James Meldrum
 *  Date: 7/5/2013
 *  Desc: Application entry point. Defines require dependencies and paths.
 *        Add to your paths spec any external libs you want to use
 *
 */

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
  'views/container',
  'router',
  'vm',
  'underscore',
  'backbone'
], function(AppContainer, Router, Vm, _, Backbone){

  // AppContainer - this is the default view rendered on all pages. It includes
  // a header and a footer that do not change. Potential for interesting
  // tracking events to be bound to this

  var appContainer = Vm.create({}, 'AppContainer', AppContainer);

  appContainer.render();

  Router.initialize({appContainer: appContainer});

});
