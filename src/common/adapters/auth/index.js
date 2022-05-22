import jwt from 'jsonwebtoken';
import retrievePrivateKey from './secret.js';

export const verifyAuthToken = token => new Promise(((resolve, reject) => {
    console.log(token)
    jwt.verify(token, retrievePrivateKey, (err, decoded) => err || !decoded
        ? reject(err)
        : resolve({ ...decoded, id: decoded.sub || decoded.id }));
}));