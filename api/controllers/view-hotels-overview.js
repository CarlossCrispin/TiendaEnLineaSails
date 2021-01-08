module.exports = {


  friendlyName: 'View hotels overview',


  description: 'Display "Hotels overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/hotels-overview'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
