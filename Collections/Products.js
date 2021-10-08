const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'user_managements';
const { Double } = require("bson");

const Data= [
    {
        
        "Name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "BasePrice": Double(116),
        "Sellprice": Double(2390),
        "Desciption": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "ProductGallery": [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300"
        ],
        "Thumbnail": [
            "D-30",
            "CL-GDS",
            "NEW-SU"
        ]
    },
    {
        
        "Name": "mi y1",
        "BasePrice": Double(116),
        "Sellprice": Double(2390),
        "Desciption": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "ProductGallery": [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300"
        ],
        "Thumbnail": [
            "D-30",
            "CL-GDS",
            "NEW-SU"
        ]
    },
    {
        
        "Name": "samsung fold",
        "BasePrice": Double(1223),
        "Sellprice": Double(2190),
        "Desciption": "Nunc nisl. Duis bibendum, felis sed interdum venenrttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "ProductGallery": [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300"
        ],
        "Thumbnail": [
            "D-30",
            "CL-GDS",
            "NEW-SU"
        ]
    },
    {
        
        "Name": "lenovo thikpad",
        "BasePrice": Double(12633),
        "Sellprice": Double(22432),
        "Desciption": "Nunc nisl. Duis bibrpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "ProductGallery": [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300"
        ],
        "Thumbnail": [
            "D-30",
            "CL-GDS",
            "NEW-SU"
        ]
    }, 
    {
        
        "Name": "hp laptops",
        "BasePrice": Double(23116),
        "Sellprice": Double(42390),
        "Desciption": "Nunc nisinterdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "ProductGallery": [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300"
        ],
        "Thumbnail": [
            "D-30",
            "CL-GDS",
            "NEW-SU"
        ]
    }]


    const client = new MongoClient(url);

    async function createCurd() {
      try {
        await client.connect();
        const database = client.db(dbName);
        const users = database.collection('Products');
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
        const users = database.collection('Products');
        const res = await users.updateMany(
            { Name: 'lenovo thikpad' },
            { $set: { Nmae: 'Updated Lenovo thinkpad' }}
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
            const users = database.collection('Products');
            const value=await users.find( {Sellprice:Double(22432) } ).toArray();
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
            const users = database.collection('Products');
            const todelete = await users.deleteOne({
              BasePrice:Double(1223)
                
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