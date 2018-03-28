// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5abb9de52da1a528983b8714')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err)=>{
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos: ${count}`);
  }, (err)=>{
    console.log('Unable to fetch todos');
  });

  db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('unable to fetch users');
  });


//  db.close();
});
