const asyncHandler = require('express-async-handler');

module.exports = (app) => {
  app.get(
    '/books',
    asyncHandler(async (req, res) => res.status(200).send({
      books: [{ id: 1, title: 'Star track' }],
      count: 1,
    })),
  );
};
