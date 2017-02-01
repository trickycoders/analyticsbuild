const Nightmare = require('nightmare');
const getNightmareInstance = require('./utils/nightmareUtils.js').getNightmareInstance;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

test('Omniture call on home page', function (done) {
    const nightmare = getNightmareInstance();
    var omnitureCalls = [];
    nightmare.on('did-get-response-details',function () {
        if(arguments['3'].indexOf("https://flipkart.d1.sc.omtrdc.net/b/ss/flipkart-prd") > -1){
            omnitureCalls.push(arguments);
        }
    });
    nightmare.goto("https://www.flipkart.com")
        .end()
        .then(function () {
            //console.log("In Page");
            //console.log("Call Length - " + omnitureCalls.length);
            expect(omnitureCalls.length).toBe(1);
            done();
        });
});

test('Omniture call on product page', function (done) {
    const nightmare = getNightmareInstance();
    var omnitureCalls = [];
    nightmare.on('did-get-response-details',function () {
        if(arguments['3'].indexOf("https://flipkart.d1.sc.omtrdc.net/b/ss/flipkart-prd") > -1){
            omnitureCalls.push(arguments);
        }
    });
    nightmare.goto("https://www.flipkart.com/ipro-ip35-smartphones-tablets-10000-mah-power-bank/p/itmejh7bupyratud?pid=PWBEJH7BFEG3VCTU")
        .end()
        .then(function () {
            expect(omnitureCalls.length).toBe(1);
            done();
        });
});


test('Omniture call on search', function (done) {
    const nightmare = getNightmareInstance();
    var omnitureCalls = [];
    nightmare.on('did-get-response-details',function () {
        if(arguments['3'].indexOf("https://flipkart.d1.sc.omtrdc.net/b/ss/flipkart-prd") > -1){
            omnitureCalls.push(arguments);
        }
    });
    nightmare.goto("https://www.flipkart.com")
        .type(".LM6RPg", "iphone")
        .click(".vh79eN")
        .wait(15000)
        .end()
        .then(function () {
            console.log("In Page");
            console.log("Call Length - " + omnitureCalls.length);
            expect(omnitureCalls.length).toBe(2);
            done();
        });
});


