import jwksClient from 'jwks-rsa';

const client = jwksClient({ jwksUri: '' });

const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
        if (err) return callback(err);
        const signingKey = key.getPublicKey();
        callback(err, signingKey);
    });
};

export default getKey;