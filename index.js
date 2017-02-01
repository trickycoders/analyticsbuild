const Nightmare = require('nightmare');

const nightmare = Nightmare({
    show: false,
    openDevTools: false,
    width: 1280,
    height: 800,
    webPreferences: {
        partition: 'nopersist'
    }
});
var omnitureCalls = [];
nightmare.on('did-get-response-details',function () {
    if(arguments['3'].indexOf("flipkart.d1.sc.omtrdc.net") > -1){
        omnitureCalls.push(omnitureCalls);
    }
});
nightmare.goto("https://www.flipkart.com/philips-qt4011-15-pro-skin-advanced-trimmer-men/p/itmdu7ymgsjzza2j?pid=SHVDU7YMGSJZZA2J&fm=merchandising&iid=M_eccf6eb3-ffc8-4377-a612-9fbe3baee451.c3fb6983-fb27-40c0-bccd-7bef0bfc288c&otracker=hp_omu_Deals+of+the+Day_1_Just+%E2%82%B91%2C549_c3fb6983-fb27-40c0-bccd-7bef0bfc288c_0")
    .end()
    .then(function () {
       console.log("In Page");
        expect(omnitureCalls.length).toBe(1);
});

