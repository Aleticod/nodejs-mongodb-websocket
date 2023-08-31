exports.success = function(req, res, message, status) {
    // res.send(message);
    res.status(status || 200).send({
        error: "",
        body: message
    })
}

exports.error = function(req, res, message, status, details) {
    console.error('[response error] ' + details); // Esto es un log
    res.status(status || 500).send({
        error: message,
        body: ""
    })
}