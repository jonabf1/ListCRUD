const express = require('express');
const routes = express.Router();

const postController = require('./controllers/PostController')
routes.post('/new', postController.store);
routes.get('/products', postController.showAll);
routes.get('/products/:id', postController.showOne);
routes.put('/products/:id', postController.updating);
routes.delete('/products/:id', postController.delete);

module.exports = routes;