var request = require('request');



request.post(
    'http://127.0.0.1:8545/',
    { json: {"method": "personal_listAccounts", "params": [], "id":1} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);