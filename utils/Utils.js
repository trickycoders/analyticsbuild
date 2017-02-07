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

module.exports.captureOmnitureCalls = function(nightmare, omnitureCalls){
    nightmare.on('did-get-response-details',function () {
        if(arguments['3'].indexOf("https://flipkart.d1.sc.omtrdc.net/b/ss/flipkart-prd") > -1){
            omnitureCalls.push(arguments);
        }
    });
}


function parseUrl(href){
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
            protocol: match[1],
            host: match[2],
            hostname: match[3],
            port: match[4],
            pathname: match[5],
            search: match[6],
            hash: match[7]
        }
}

function getSearchParems(search) {
    let result = {}
    search.substring(1).split("&").forEach(function(item){
        const keyVal = item.split("=");
        result[keyVal[0]] = keyVal[1];
    })
    return result;
}

module.exports.getUrlParameters = function (url) {
    var parsedUrl = parseUrl(url);
    if(parsedUrl.search){
        return getSearchParems(parsedUrl.search);
    }
    return null;
}

module.exports.pick = function (obj, names) {
    if(!names) names = [];
    const result = {};
    if (!obj) return result;
    let idx = 0;
    while (idx < names.length) {
        if (names[idx] in obj) {
            result[names[idx]] = obj[names[idx]];
        }
        idx += 1;
    }
    return result;
}

