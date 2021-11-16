const mongoose = require('mongoose');
const mdb = require("mongodb")

async function connectDatabase(url, name = 'keetabi') {
  const client = new mdb.MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const mdb = client.db();

    // Test the connection
    const collections = await mdb.collections();
    console.log(
      'Connected to MongoDB | Collections count:',
      collections.length
    );

    return {
      mdb,
      mdbClose: () => client.close(),
    };
  } catch (err) {
    console.error('Error in MongoDB Client', err);
    process.exit(1);
  }


  // new Promise(resolve, reject)
  // console.log('checking db connection');
  // let conn;
  // let connString = encodeURI(url);
  // console.log(connString)
  // const client = new MongoClient(connString, { useNewUrlParser: true, useUnifiedTopology: true });
  // await client.connect();
  // connectedDbs[name] = client.db('test');
  // console.log( `db connected: ${connectedDbs}`);
}

module.exports = { mdb }


module.exports = {  connectDatabase };
