const { Double } = require("bson");

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';

const Data=[
    {
        "User": "HaileyGandy",
        "BasePrice": Double(800),
        "SalePrice": Double(6341),
        "TotalPrice": Double(2349),
        "product": "alpha",
        "ProductQty": Double(3)
    },
    {
        "User": "JustinaHanshaw",
        "BasePrice": Double(803),
        "SalePrice": Double(6344),
        "TotalPrice": Double(2345),
        "product": "alpha" ,
        "ProductQty": Double(3)
    },
    {
        "User": "DarceePaaso",
        "BasePrice": Double(802),
        "SalePrice": Double(6342),
        "TotalPrice": Double(2340),
        "product":"alpha",
        "ProductQty": Double(3)
    },
    {
        "User": "Garner Peret",
        "BasePrice": Double(808),
        "SalePrice": Double(6341),
        "TotalPrice": Double(2345),
        "product": "alpha",
        "ProductQty": Double(3)
    },
    {
        "User": "Mavis Binning",
        "BasePrice": Double(802),
        "SalePrice": Double(6347),
        "TotalPrice": Double(2340),
        "product": "alpha",
        "ProductQty": Double(3)
    }]

    const client = new MongoClient(url);
    
    
    async function createCurd() {
        // 1. creat 


      try {
        await client.connect();
        const database = client.db(dbName);
        const users = database.collection('Carts');
        const res = await users.insertMany(Data);
        console.log('Successfully written records = ' + res.insertedCount);
      } catch (e) {
        console.log('An Error Occured');
        console.log(e);
      } finally {
        console.log('Closing Connection');
      }
    
    //   2.Update
    


      try{
        const database= client.db(dbName)
        const users = database.collection('Carts');
        const res = await users.updateMany(
          { User: 'JustinaHanshaw' },
          { $set: {User: 'Updated Users' }}
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
    // 3.find 




        try{
            // await client.connect()
            const database= client.db(dbName)
            const users = database.collection('Carts');
            const value=await users.find( { User: { $in: [ "Garner Peret" ] } } ).toArray();
            console.log(value)
    
    
        }
        catch(e){
            console.log(e)
        }
        finally{
            console.log("done Finding")
        }
        




        // 4.delete 
    
        try {
            const database = client.db(dbName);
            const users = database.collection('Carts');
            const todelete = await users.deleteMany({

              User: { $in: ["JustinaHanshaw","Mavis Binning"] },
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


