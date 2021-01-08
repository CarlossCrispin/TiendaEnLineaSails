/* eslint-disable indent */
module.exports = {


    friendlyName: 'View index',


    description: 'Display "Index" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/products/index'
        }

    },


    fn: async() => {

        // eslint-disable-next-line no-undef
        let data = await Product.find();

        /* if (this.req.me.isAdmin) {
            throw { redirect: '/products' };
        } */

        if (!data || data.length === 0) {
            return {
                data: 'data notFound'
            };
        }
        // console.log(data);

        return {
            data: data
        };
    }
};
