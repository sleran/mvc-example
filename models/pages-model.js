const db = require('../config/mysql')();

exports.getPage = (title) => {
    return new Promise((resolve, reject) => {
        try {
            const sql = title ? "SELECT * FROM pages WHERE title = ?" : "SELECT * FROM pages WHERE frontpage = 1"; //Turnery operator = title - hvis sand - eller hvis falsk
            db.query(sql, [title], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        } catch(error) {
            reject(error);
        }
    });
};