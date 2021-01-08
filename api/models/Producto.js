/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'productos',
  attributes: {

    nombre:{
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    categoria:{
      type: 'string'
    },
    imgURL: {
      type: 'string'
    },
    stock: {
      type: 'number'
    },
    precio: {
      type: 'number'
    },

  },

};

