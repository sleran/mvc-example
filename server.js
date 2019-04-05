module.exports = (app) => {
    app.listen(5000, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);  // Stopper processen, statuskode 1
        }
        console.info('Server kører på port 5000');
    });
}