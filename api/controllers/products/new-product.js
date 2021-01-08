/* eslint-disable no-undef */
/* eslint-disable indent */
module.exports = {


    friendlyName: 'New product',


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

        await Product.create({
            name: name,
            description: description,
            price: price,
            stock: stock,
            imgURL: imgURL
        });
        //revisar
        let data = await Product.find();

        if (!data || data.length === 0) {
            return {
                data: 'data notFound'
            };
        }
        console.log(data);
        return {
            data: data
        };


    }


};
