const {MongoClient, ObjectID} = require('mongodb');
const test = require('assert');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) return console.log('Error connecting to MongoDB server');

	console.log('Connected to MongoDB server');

	// findOneAndUpdate
	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('58a170830fc4a58a51ff7164')
	}, {
		$set: {
			complete: true
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});*/

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58a184ab47144b8c134b85f6')
	}, {
		$set: {
			name: 'Les'
		},
		$inc: {
			age: -4
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});
	
	//db.close();
});