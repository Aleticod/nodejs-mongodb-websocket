const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = function(req, res, message, status) {
    // res.send(message);
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        statusCode = 200;
    }

    if (!message) {
        statusMessage = statusMessages[statusCode];
    }
    res.status(statusCode).send({
        error: "",
        body: statusMessage
    })
}

exports.error = function(req, res, message, status, details) {
    console.error('[response error] ' + details); // Esto es un log
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        statusCode = 500;
    }

    if (!message) {
        statusMessage = statusMessages[statusCode];
    }
    res.status(statusCode).send({
        error: statusMessage,
        body: ""
    })
}