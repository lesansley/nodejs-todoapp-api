const {MongoClient, ObjectID} = require('mongodb');
const test= require('assert');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) return console.log('Error connecting to MongoDB server');

	console.log('Connected to MongoDB server');

/*	db.collection('Todos').find({complete: false}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, null, 4));
	}, (err) => {
		console.log('Unable to find records', err);
	});*/

	db.collection('Users').find({name:'Les'}).count().then((count) => {
		test.equal(2, count);
		console.log(`Users count: ${count}`);
	}, (err) => {
		console.log('Unable to interrogate MongoDB', err);
	});
	//db.close();
});