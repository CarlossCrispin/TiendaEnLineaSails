/**
 * ProductoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  get: (req, res) => {
    // eslint-disable-next-line no-undef
    Producto.find()
      .then((productos) => {
        if (!productos || productos.length === 0) {
          return res.send({
            'success': false,
            'message': 'No se encontraron productos'
          });
        }
        res.send({
          'success': true,
          'message': 'Productos encontrados',
          'data': productos,
        });
      })
      .catch((err)=>{
        sails.log.debug(err);
        res.send({
          'success': false,
          'message': 'No se encontraron productos'
        });
      });
  },
  post: (req, res) => {
    sails.log.debug(req);
  }
};

