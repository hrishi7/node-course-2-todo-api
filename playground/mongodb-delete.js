// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'lunch'}).then((result) =>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'Andrew'}).then((result) =>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text:'lunch'}).then((result) =>{
  //   console.log(result);
  // });
  // db.collection('Users').deleteOne({name:'Andrew'}).then((result) =>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5abb9a669a0a4a1168df379f')
  }).then((result)=>{
    console.log(result);
  });

//  db.close();
});
