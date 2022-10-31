const ibmdb = require("ibm_db");

const connStr = `DATABASE=${process.env.DB2_DATABASE};HOSTNAME=${process.env.DB2_HOSTNAME};PORT=${process.env.DB2_PORT};SECURITY=SSL; SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=${process.env.DB2_USERNAME};PWD=${process.env.DB2_PASSWORD}`;

let conn;

const connectToDb = async () => {
  conn = await ibmdb.open(connStr);
  console.log("Connected to database!");
};

const getConnection = () => conn;

module.exports = { connectToDb, getConnection };
