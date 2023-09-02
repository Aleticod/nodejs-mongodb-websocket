const config = {
    dbUrl: process.env.DB_URL || "mongodb://root:root@127.0.0.1:27017/?authMechanism=DEFAULT&tls=false",
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost",
    publicRoute: process.env.PUBLIC_ROUTE || "/app",
}

module.exports = config;