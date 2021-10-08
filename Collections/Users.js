const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const Data = [
    {
        
    
    "Role":"Developer",
    "FirstName":"Romin",
    "LastName":"Irani",
    "ProfileImg":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    "Email":"romin.k.irani@gmail.com"
    },
    {
    "Role":"Developer",
    "FirstName":"Neil",
    "LastName":"Irani",
    "ProfileImg":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    "Email":"neilrirani@gmail.com"
    },
    {
    "Role":"Developer2",
    "FirstName":"Neil2",
    "LastName":"Irani2",
    "ProfileImg":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    "Email":"neilrirani@gmail.com2"
    },
    {
    "Role":"Developer3",
    "FirstName":"Neil3",
    "LastName":"Irani3",
    "ProfileImg":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    "Email":"neilrirani@gmail.com3"
    },
    {
    "Role":"Program Directory",
    "FirstName":"Tom",
    "LastName":"Hanks",
    "ProfileImg":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    "Email":"tomhanks@gmail.com"
    }
    
        
];

const client = new MongoClient(url);

async function createCurd() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('Users');
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
    const users = database.collection('Users');
    const res = await users.updateMany(
        { firstName: 'Neil2' },
        { $set: { firstName: 'Updated Neil' }}
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
        const users = database.collection('Users');
        const value=await users.find( { FirstName: { $in: [ "Neil2" ] } } ).toArray();
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
        const users = database.collection('Users');
        const todelete = await users.deleteMany({
            FirstName: { $in: ["Neil3","Neil"] },
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