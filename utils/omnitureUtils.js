module.exports.captureOmnitureCalls = function(nightmare, omnitureCalls){
    nightmare.on('did-get-response-details',function () {
        if(arguments['3'].indexOf("https://flipkart.d1.sc.omtrdc.net/b/ss/flipkart-prd") > -1){
            omnitureCalls.push(arguments);
        }
    });
}
