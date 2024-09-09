const authenticate = (req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (apiKey && apiKey === 'my-secret-api-key') {
      next(); // If authorized, continue to the next middleware or route handler
    } else {
      res.status(401).json({ error: 'Unauthorized' }); // If not authorized, send a 401 response
    }
  };
  module.exports={authenticate}