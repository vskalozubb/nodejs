const booksRoutes = require('./books');

module.exports = (app) => {
  booksRoutes(app);
};
