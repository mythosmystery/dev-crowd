const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
module.exports = (context) => {
   const tokenHeader = context.req.headers.authorization;
   if (tokenHeader) {
      const token = tokenHeader.split('Bearer ')[1];
      if (token) {
         try {
            const user = jwt.verify(token, 'super secret');
            return user;
         } catch (err) {
            throw new AuthenticationError('invalid token');
         }
         throw new AuthenticationError('token not found');
      }
   }
};
