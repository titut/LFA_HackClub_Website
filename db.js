const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://HackClub:LFAHackClub123@cluster0.eqbtmac.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run(){
    const database = client.db('Main');

    var user = {
        username:"HackClubYay!",
        password:"13579"
    };

    var data = await database.collection('users').find().toArray();

    console.log(data);

    client.close();
}

run();