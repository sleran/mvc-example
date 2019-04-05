const model = require('../models/pages-model')

exports.mainPage = async (req, res, next) => {
    try {
        let title = req.params.title || '';
        const page = await model.getPage(title);
        res.render("page", page);
    } catch(error) {
        console.error(error);
        res.end();        
    }
};