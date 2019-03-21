let https = require('https');
const URL = 'https://rti-giken.jp/fhc/api/train_tetsudo/delay.json';

const Delay = function () {};

Delay.prototype.getDelayData = function () {
    return new Promise(function (resolve) {
        https.get(URL, (res) => {
            let body = '';
            res.setEncoding('utf8');

            res.on('data', (chunk) => {
                body += chunk;
            });

            res.on('end', (res) => {
                res = JSON.parse(body);
                resolve(res);
            });
        }).on('error', (e) => {
            console.log(e.message);
        });
    });
};

module.exports = Delay;