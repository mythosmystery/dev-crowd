const jwt = require('jsonwebtoken');
module.exports = ({ req }) => {
   let token = req.body.token || req.query.token || req.headers.authorization;
   if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
   }
   if (!token) {
      return req;
   }
   try {
      const { data } = jwt.verify(token, 'super secret', { maxAge: '2h' });
      req.user = data;
   } catch {
      console.log('invalid token');
   }
   return req;
};
