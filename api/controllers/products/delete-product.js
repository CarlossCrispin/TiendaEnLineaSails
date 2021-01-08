/* eslint-disable indent */
module.exports = {


    friendlyName: 'Delete product',


    description: '',


    inputs: {

    },


    exits: {
        success: {
            viewTemplatePath: 'pages/products/index',
        },
    },


    fn: async function(inputs) {
        const id = this.req.params;

        // eslint-disable-next-line no-undef
        await Product.destroy(id);
        // eslint-disable-next-line no-undef
        let data = await Product.find();


        if (!data || data.length === 0) {
            return {
                data: 'data notFound'
            };
        }
        return {
            data: data
        };


    }


};
