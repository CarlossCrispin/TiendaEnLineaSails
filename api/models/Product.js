/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
 tableName: 'products',
  attributes: {

    name:{
      type: 'string',
      required:true
    },
    description:{
      type: 'string',
      required: true
    },
    price:{
      type: 'number',
      required: true
    },
    imgURL:{
      type: 'string',
      required: true
    },
    stock:{
      type: 'number',
      required: true
    }
  },

};

