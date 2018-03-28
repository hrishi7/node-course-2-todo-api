// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // });

  // db.collection('Users').insertOne({
  //   name:'Hrishikesh',
  //   age:'21',
  //   location:'kolkata'
  // }, (err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert User', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.close();
});
