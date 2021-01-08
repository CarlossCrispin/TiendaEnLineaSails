/* eslint-disable indent */
module.exports = {


    friendlyName: 'View edit product',


    description: 'Display "Edit product" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/products/edit-product'
        }

    },


    fn: async function() {

        const id = this.req.params;

        // eslint-disable-next-line no-undef
        let data = await Product.findOne(id);

        // Respond with view.
        return {
            data: data
        };

    }



};
