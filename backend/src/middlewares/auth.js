const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ');
  
        if (token[0] === 'Bearer' && jwt.verify(token[1], 'superSecretThing')) {
            next()
        }
    } catch (err) {
        if (err.name === 'jsonWebTokenError') {
            return response.sendStatus(401);
        } else {
            return response.sendStatus(401);
        }
    }
}

module.exports = auth;