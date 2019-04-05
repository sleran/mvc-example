module.exports = (express, app) => {
    app.use(express.static('./public'));
}