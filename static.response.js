'use strict';

exports.handler = (event, context, callback) =>{
    callback(null, {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Authorization'},
        body: JSON.stringify({url: 'http://bytebay.com'})
    });
}
;