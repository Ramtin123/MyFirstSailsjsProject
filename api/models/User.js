/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      name: {
          type: 'string',
          required:true
      },
      title: {
          type:'string'
      },
      toJSON: function () {
          var obj = this.toObject();
          delete obj.title;
          return obj;
      }
  },
  beforeCreate: function (values, next) {
      console.log("Ia am going to create " + values.name);
      values.name = values.name.toLowerCase();
      next();
  }
};

