var request = require('request');

var options = {
url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
method: 'POST'
};

function callback(error, response, body) {
if (!error && response.statusCode == 200) {
    console.log(body);
}
}

request(options, callback);