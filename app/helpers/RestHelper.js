var $ = require('jquery');

module.exports = {
  get: function(url) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        dataType: 'json',
        error: error,
        success: success,
      });
    });
  },

  post: function(url, data) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type: 'POST',
        data: data,
        error: error,
        success: success,
      });
    });
  },

  patch: function(url, data) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type: 'PATCH',
        data: data,
        error: error,
        success: success,
      });
    });
  },

  del: function(url, data) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type: 'DELETE',
        error: error,
        success: success,
      });
    });
  },
};
