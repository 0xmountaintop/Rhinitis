var request = require('request');

var promise = new Promise(function(resolve, reject) {
    request.post(
        'http://127.0.0.1:8545/',
        { json: {"method": "personal_listAccounts", "params": [], "id":1} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(Error(error));
            }
        }
    )
});

promise.then(function(result) {
    // console.log(result);
    var f = JSON.parse(JSON.stringify(result));
    // console.log(f.result);
    console.log(f.result.length);
}, function(err) {
    console.log(err);
});