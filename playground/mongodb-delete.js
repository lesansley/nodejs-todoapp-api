const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) return console.log('Error connecting to MongoDB server');

	console.log('Connected to MongoDB server');

	//deleteMany
	/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result => {
		console.log(result);
	}));*/

	//deleteOne
	/*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result => {
		console.log(result);
	}));*/

	//findOneAndDelete
	/*db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result => {
		console.log(result);
	}));*/

	db.collection('Users').deleteMany({name: 'Les'}).then(() => {
		db.collection('Users').findOneAndDelete({_id: new ObjectID("58a184a59e9c838c103f7e70")}).then((result) => {
			console.log(result);
		});
	});
	
	//db.close();
});