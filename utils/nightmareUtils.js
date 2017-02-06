const Nightmare = require('nightmare');

module.exports.getNightmareInstance = function(type){
    let options = {
        show: false,
        openDevTools: true,
        width: 1280,
        height: 800,
        webPreferences: {
            partition: 'nopersist'
        }
    };
    if(type && type === "MOBILE"){
        options.width =  360;
        options.height =  640;
    }
    return Nightmare(options);
}