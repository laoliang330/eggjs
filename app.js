// app.js
module.exports = app => {
    app.messenger.on('refresh', by => {
        app.logger.info('start update by %s', by);
    });
}
