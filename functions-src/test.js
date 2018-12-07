exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "I just made some JAM!"
    });
}