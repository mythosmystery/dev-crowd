const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const secret = 'suuupersecret';
const expires = '3h';
module.exports = {
   authMiddleware: ({ req }) => {
      let token = req.headers.authorization;

      // We split the token string into an array and return actual token
      if (token) {
         token = token.split(' ').pop().trim();
      }

      if (!token) {
         return req;
      }

      // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
      try {
         const data = jwt.verify(token, secret, { maxAge: expires });
         req.user = data;
      } catch {
         console.log('Invalid token');
      }

      // return the request object so it can be passed to the resolver as `context`
      return req;
   },
   signToken: ({ _id, email, username }) => {
      return jwt.sign({ _id, email, username }, secret, { expiresIn: expires });
   },
};
