const controllers = require('../controllers/pages-controllers');

module.exports = (app) => {
    app.get('/page', controllers.mainPage);
    app.get('/page/:title', controllers.mainPage);
}