const { MongoClient } = require("mongodb");

const DB_URI ="mongodb+srv://fiap97:<password>@twitter.0y5ibsp.mongodb.net/";


const client = new MongoClient(DB_URI);
export async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);