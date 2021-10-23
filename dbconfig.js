const config = {
    user: 'book',
    password: '123',
    server: 'TUYENQUANG-PC',
    database: 'Book',
    dialect: "mssql",
    options: {
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
        trustServerCertificate: true
    },
    port: 1433
}

module.exports = config