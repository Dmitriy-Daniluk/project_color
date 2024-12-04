const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

var data = require("./data.js").data;
// console.log(data);

// Database Name
const dbName = 'colorProject';
async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('Connected successfully to server');
	const db = client.db(dbName);
	const collection = db.collection('colors');
	// the following code examples can be pasted here...
	const insertResult = await collection.insertMany(data);
	console.log('Inserted documents =>', insertResult);
	return 'done.';
}




main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());