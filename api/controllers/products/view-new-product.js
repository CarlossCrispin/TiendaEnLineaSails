module.exports = {


  friendlyName: 'View new product',


  description: 'Display "New product" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/products/new-product'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
