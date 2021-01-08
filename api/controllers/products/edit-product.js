/* eslint-disable indent */
module.exports = {


    friendlyName: 'Edit product',


    description: '',


    inputs: {
        name: {
            required: true,
            type: 'string'
        },
        price: {
            required: true,
            type: 'number'
        },
        stock: {
            required: true,
            type: 'number'
        },
        description: {
            required: true,
            type: 'string'
        },
        imgURL: {
            required: true,
            type: 'string'
        },
    },


    exits: {
        success: {
            viewTemplatePath: 'pages/products/index',
        },
    },


    fn: async function({ name, price, stock, description, imgURL }) {
        const id = this.req.params;
        console.log(id);
        // eslint-disable-next-line no-undef
        await Product.update(id, {
            name: name,
            description: description,
            price: price,
            stock: stock,
            imgURL: imgURL
        });
        // All done.
        //revisar
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
