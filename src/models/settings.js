define(function(require) {

  var $ = require('jquery');
  var Backbone = require('backbone');
  var Store = require('localstorage');

  var Settings = Backbone.Model.extend({

    defaults: {
      id: 0,
      openDocId: undefined
    },

    localStorage: new Store('appSettings'),

    initialize: function() {
      this.loading = $.Deferred();

      this.fetch({
        success: this.loading.resolve,
        error: this.loading.resolve
      });
    }

  });



  return Settings;
});
