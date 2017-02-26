const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Error connecting to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		complete: false
	}, (err, result) => {
		if (err) return console.log('Unable to insert todo', err);

		console.log(JSON.stringify(result.ops, null, 4));
	});*/

	db.collection('Users').insertOne({
		name: 'Les',
		age: 42,
		location: 'Uk'
	}, (err, result) => {
		if (err) return console.log('Unable to insert todo', err);

		console.log(JSON.stringify(result.ops, null, 4));
	});

	db.close();
});