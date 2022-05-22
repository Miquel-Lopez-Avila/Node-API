import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa' ;

const checkJwt = async (req,res,next) => {
    try{
        await jwt({
            secret: jwksRsa.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://carendar-daw.eu.auth0.com/.well-known/jwks.json `
            }),

            audience: 'https://carendar-daw.eu.auth0.com/api/v2/',
            issuer: [`https://carendar-daw.eu.auth0.com/`],
            algorithms: ['RS256']
        })(req, res, next);
        next();
    }catch(err){
        res.status(401).send();
    }

};

export default checkJwt;