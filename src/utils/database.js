const mongoose = require('mongoose');
const connectedDbs = {};

async function connectDatabase(url, name = 'keetabi') {
  return new Promise(async (resolve, reject) => {
    console.log('checking db connection');
    let conn;
    try {
      let connString = url;
      conn = await mongoose.createConnection(connString);
    } catch (err) {
      console.log(err)
      reject(err);
    }
    connectedDbs[name] = conn;
    console.log(`db connected : ${name}`);
    resolve();
  });
}


module.exports = { connectedDbs, connectDatabase };
