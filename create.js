var request = require('request');

var cnt = 0; 
const total = 1;

// function f_creat_account(resolve, reject) {
//     request.post(
//         'http://127.0.0.1:8545/',
//         { json: {"method": "personal_newAccount", "params": [""], "id":1} },
//         function (error, response, body) {
//             if (!error && response.statusCode == 200 && cnt >= total) {
//                 // resolve(body);
//             }
//             else if (!error && response.statusCode == 200) {
//                 cnt ++;
//                 f_creat_account(resolve, reject);
//                 // resolve(body);
//             }
//             else {
//                 f_creat_account(resolve, reject);
//                 // reject(Error(error));
//             }
//         }
//     );
// }

// var promise = new Promise(function(resolve, reject) {
//     f_creat_account(resolve, reject)
// });

function f_creat_account() {
    request.post(
        'http://127.0.0.1:8545/',
        { json: {"method": "personal_newAccount", "params": [""], "id":1} },
        function (error, response, body) {
            if (!error && response.statusCode == 200 && cnt >= total) {
                // resolve(body);
            }
            else if (!error && response.statusCode == 200) {
                cnt ++;
                f_creat_account();
            }
            else {
                f_creat_account();
            }
        }
    );
}

f_creat_account();