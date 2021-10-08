const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const Data = [
    {
        
    
    "Description":"Seller",
    "Slug":"Romin",
    "Name":"Irani",
    "Image":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
    {
    "Description":"network Marketing",
    "Slug":"Neil",
    "Name":"Irani",
    "Image":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
    {
    "Description":"Designer",
    "Slug":"Neil2",
    "Name":"Irani2",
    "Image":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
    {
    "Description":"Manager",
    "Slug":"Neil3",
    "Name":"Irani3",
    "Image":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
    {
    "Description":"Dilevery guy",
    "Slug":"Tom",
    "Name":"Hanks",
    "Image":"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    }
    
        
];

const client = new MongoClient(url);

async function createCurd() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const users = database.collection('Categories');
    const res = await users.insertMany(Data);
    console.log('Successfully written records = ' + res.insertedCount);
  } catch (e) {
    console.log('An Error Occured');
    console.log(e);
  } finally {
    console.log('done creation');
  }

//   Update

  try{
    const database= client.db(dbName)
    const users = database.collection('Categories');
    const res = await users.updateMany(
        { Slug: 'Neil2' },
        { $set: { Slug: 'Updated Neil' }}
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
        const users = database.collection('Categories');
        const value=await users.find( { Slug: { $in: [ "Romin" ] } } ).toArray();
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
        const users = database.collection('Categories');
        const todelete = await users.deleteMany({
            Slug: { $in: ["Neil3","Neil"] },
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