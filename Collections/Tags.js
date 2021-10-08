const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const Data = [
    {
        
    
    "Name":"Romin",
    "Slug":"Irani",
    },
    {
    "Name":"Neil",
    "Slug":"Irani",
    },
    {
    "Name":"Neil2",
    "Slug":"Irani2",
    },
    {
    "Name":"Neil3",
    "Slug":"Irani3",
    },
    {
    "Name":"Tom",
    "Slug":"Hanks",
    }
    
        
];

const client = new MongoClient(url);

async function createCurd() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('Tags');
    const res = await users.insertMany(Data);
    console.log('Successfully written records = ' + res.insertedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('Closing Connection');
  }

//   Update

  try{
    const database= client.db(dbName)
    const users = database.collection('Tags');
    const res = await users.updateMany(
        { Name: 'Neil2' },
        { $set: { Name: 'Updated Neil' }}
                )
    console.log(res);
  }
    catch(e){
        console.log("error as follow")
        console.log(e)
    }
    finally{
        console.log("done upadte")
        // await client.close();
    }
// find 
    try{
        // await client.connect()
        const database= client.db(dbName)
        const users = database.collection('Tags');
        const value=await users.find( { Name: { $in: [ "Neil2" ] } } ).toArray();
        console.log(value)


    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log("done Finding")
    }
    
    // delete 

    try {
        const database = client.db(dbName);
        const users = database.collection('Tags');
        const todelete = await users.deleteMany({
            Name: { $in: ["Neil3","Neil"] },
        });
        console.log('Successfully deleted records = ' + todelete.deletedCount);
      } catch (e) {
        console.log('An Error Occured');
        console.log(e);
      } finally {
        console.log(' finally Closing Connection after deltin');
        await client.close();
      }
    
}

createCurd().catch(console.dir);