var port = 3000;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '000000000000000',
        clientSecret: '00000000000000000000000000000000',
        callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
    },
    twitter: {
        clientID: '0000000000000000000000000',
        clientSecret: '00000000000000000000000000000000000000000000000000',
        callbackURL: 'http://localhost:' + port + '/oauth/twitter/callback'
    }
};
