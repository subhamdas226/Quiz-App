

const mongoose = require('mongoose');
const url = "mongodb+srv://quizdb:1435051051@cluster0.peo6y.mongodb.net/quizdb?retryWrites=true&w=majority";
// const url = "mongodb://quizdb:<143>@cluster0-shard-00-00.peo6y.mongodb.net:27017,cluster0-shard-00-01.peo6y.mongodb.net:27017,cluster0-shard-00-02.peo6y.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7lpali-shard-0&authSource=admin&retryWrites=true&w=majority"
module.exports = (async()=>{
  try {
    // Connect to the MongoDB cluster
     await mongoose.connect(
        url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" DB is connected")
    );

  } catch (e) {
    console.log("could not connect");
    console.log("Error in DB connection !" + JSON.stringify(e, undefined,2));
  }
  
})
// var oracledb = require('oracledb');
// module.exports = (async function () {
//   let connection;
//   try{
//     connection = await oracledb.getConnection({
//           user : 'SYSTEM',
//           password : '1998',
//           connectString : ''
//     });
//     console.log("Successfully connected to Oracle!")
//     result = await connection.execute(`SELECT * FROM QUESTION WHERE QnId=1501`,[], // no binds
//     {
//       outFormat: oracledb.OBJECT
//     });
//     console.log("result: ", result);
//     console.log("DATAS: ", result.rows);
//   } catch(err) {
//       console.log("Error: ", err);
//     } finally {
//       if (connection) {
//         try {
//           await connection.close();
//         } catch(err) {
//           console.log("Error when closing the database connection: ", err);
//         }
//       }
//     }
  
// })();