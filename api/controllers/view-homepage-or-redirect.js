/* eslint-disable indent */
module.exports = {
    friendlyName: 'View homepage or redirect',

    description: 'Display or redirect to the appropriate homepage, depending on login status.',

    exits: {
        success: {
            statusCode: 200,
            description: 'Requesting user is a guest, so show the public landing page.',
            viewTemplatePath: 'pages/homepage',
        },

        redirect: {
            responseType: 'redirect',
            description: 'Requesting user is logged in, so redirect to the internal welcome page.',
        },
    },

    fn: async function() {
        if (this.req.me) {

            throw { redirect: '/welcome' };
        }
        /* if (this.req.me.isAdmin) {
            throw { redirect: '/products' };
        } */

        var userrecord = await User.find();

        if (!userrecord || userrecord.length === 0) {
            await User.create(
                    _.extend({
                            fullName: 'Crispin',
                            emailAddress: 'carlos.crispin.cc@gmail.com',
                            password: await sails.helpers.passwords.hashPassword('carlos123'),
                            tosAcceptedByIp: this.req.ip,
                            isAdmin: true,
                        },
                        sails.config.custom.verifyEmailAddresses ? {
                            emailProofToken: await sails.helpers.strings.random(
                                'url-friendly'
                            ),
                            emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
                            emailStatus: 'unconfirmed',
                        } : {}
                    )
                )
                .intercept('E_UNIQUE', 'emailAlreadyInUse')
                .intercept({ name: 'UsageError' }, 'invalid')
                .fetch();
        }

        return {};
    },
};
