const utils = require('./utils/Utils.js');


jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const ENVIRONMENT = process.env.ENVIRONMENT || "https://flipkart.com";


test('Omniture call on home page', function (done) {
    const nightmare = utils.getNightmareInstance();
    let omnitureCalls = [];
    utils.captureOmnitureCalls(nightmare,omnitureCalls);
    nightmare.goto(ENVIRONMENT)
        .end()
        .then(function () {
            const urlParams = utils.getUrlParameters(omnitureCalls[0]['2']);
            let variables;
            if(urlParams) variables = utils.pick(urlParams, ['c1','events']);
            expect(omnitureCalls.length).toBe(1);
            expect(variables).toEqual({ c1: 'HomePage', events: 'event1' });
            done();
        });
});


test('Omniture call on product page', function (done) {
    const nightmare = utils.getNightmareInstance();
    let omnitureCalls = [];
    utils.captureOmnitureCalls(nightmare,omnitureCalls);
    nightmare.goto(ENVIRONMENT + "/ipro-ip35-smartphones-tablets-10000-mah-power-bank/p/itmejh7bupyratud?pid=PWBEJH7BFEG3VCTU")
        .end()
        .then(function () {
            expect(omnitureCalls.length).toBe(1);
            done();
        });
});


test('Omniture call on search', function (done) {
    const nightmare = utils.getNightmareInstance();
    let omnitureCalls = [];
    utils.captureOmnitureCalls(nightmare,omnitureCalls);
    nightmare.goto(ENVIRONMENT)
        .type(".LM6RPg", "iphone")
        .click(".vh79eN")
        .wait(15000)
        .end()
        .then(function () {
            expect(omnitureCalls.length).toBe(2);
            done();
        });
});



