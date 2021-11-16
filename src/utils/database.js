const { MongoClient } = require("mongodb")
let connectionDbs = {}

async function connectDatabase(url, name = 'keetabi') {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const mdb = client.db();
    connectionDbs.db = mdb;
    
    // Test connection
    const collections = await mdb.collections();
    console.log(
      'Connected to MongoDB | Collections count:',
      collections.length
    );

    return {
      connectionDbs,
      mdbClose: () => client.close(),
    };
  } catch (err) {
    console.error('Error in MongoDB Client', err);
    process.exit(1);
  }

}

module.exports = { connectionDbs, connectDatabase }
