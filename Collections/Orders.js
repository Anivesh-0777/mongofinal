const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';


const Data= [
    {
        "UserId": "57JZ04",
        "BillingAddress": "non mi integer ac neque duis bibendum morbi non quam",
        "ShippingAddress": " sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        "TransactionStatus": true,
        "Products": [
            "Alphs",
            "beta",
            "gamma"
        ],
        "TotalItems": 1
    },
    {
        "UserId": "57J3204",
        "BillingAddress": "non mi integer ac neque duis bibendum morbi non quam",
        "ShippingAddress": " sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        "TransactionStatus": true,
        "Products": [
            "Alphs",
            "beta",
            "gamma"
        ],
        "TotalItems": 2
    },
    {
        "UserId": "523JZ04",
        "BillingAddress": "non mi integer ac neque duis bibendum morbi non quam",
        "ShippingAddress": " sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        "TransactionStatus": false,
        "Products": [
            "Alphs",
            "beta",
            "gamma"
        ],
        "TotalItems": 3
    },
    {
        "UserId": "5234JZ04",
        "BillingAddress": "non mi integer ac neque duis bibendum morbi non quam",
        "ShippingAddress": " sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        "TransactionStatus": false,
        "Products": [
            "Alphs",
            "beta",
            "gamma"
        ],
        "TotalItems": 4
    },
    {
        "UserId": "3242JF3",
        "BillingAddress": "non mi integer ac neque duis bibendum morbi non quam",
        "ShippingAddress": " sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        "TransactionStatus": true,
        "Products": [
            "Alphs",
            "beta",
            "gamma"
        ],
        "TotalItems": 5
    },


]


const client = new MongoClient(url);

    async function createCurd() {
      try {
        await client.connect();
        const database = client.db(dbName);
        const users = database.collection('Orders');
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
        const users = database.collection('Orders');
        const res = await users.updateMany(
            { UserId: '523JZ04' },
            { $set: { Nmae: '322q43' }}
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
            const users = database.collection('Orders');
            const value=await users.find( {UserId:"5234JZ04"} ).toArray();
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
            const users = database.collection('Orders');
            const todelete = await users.deleteOne({
              UserId:"5234JZ04"
                
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