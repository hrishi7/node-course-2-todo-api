// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5abba76a2da1a528983b8ad7')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5abba2172da1a528983b8896')
  },{
    $set:{
      name:'Hrishikesh'
    },
    $inc:{age:1}
  },
    {
      returnOriginal:false
    }).then((result) =>{
      console.log(result);
    })

//  db.close();
});
