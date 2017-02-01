const Nightmare = require('nightmare');

module.exports.getNightmareInstance = function(type){
    return Nightmare({
        show: true,
        openDevTools: true,
        width: 1280,
        height: 800,
        webPreferences: {
            partition: 'nopersist'
        }
    });
}