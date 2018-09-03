var request = require('request');
var Web3 = require('web3');
var web3 = new Web3();

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
}).then(function(result) {
        // console.log(result);
        var json = JSON.parse(JSON.stringify(result));
        // console.log(json.result);
        console.log(json.result.length);
        return json.result
    }, function(err) {
        console.log(err);
}).then(function(result) {

        // console.log(result)

        // for (var i = 1; i < result.length; i++) {
        for (var i = 1; i < 4; i++) {
            var params = {"from": "0x279de60b10b1d47ff9a300182995c8cbf06a87d3", "to": "0x9d40b5492b86032af24485312fc19492427efa35", "gas": web3.toWei(0.002, "ether"), "gasPrice": "0x9184e72a000", "value": web3.toWei(0.002, "ether")};

            request.post(
                'http://127.0.0.1:8545/',
                { json: {"method": "eth_sendTransaction", "params": [params], "id":1} },
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body)
                        // resolve(body);
                    }
                    else {
                        // reject(Error(error));
                    }
                }
            )
        }
        return result
    }, function(err) {
        console.log(err);
});
