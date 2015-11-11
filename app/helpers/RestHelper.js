var $ = require('jquery');

module.exports = {
  get: function(url){
    return new Promise(function(success, error){
      $.ajax({
        url: url,
        dataType: 'json',
        error: error,
        success: success,
      });
    })
  },

  post: function(url, data){
    return new Promise(function(success, error){
      $.ajax({
        url: url,
        type: 'POST',
        data: data,
        error: error,
        success: success,
      });
    })
  },
};
