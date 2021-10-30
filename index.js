const express = require('express');
const { MongoClient } = require('mongodb');
require("dotenv").config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//MiddleWare
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ielln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

async function run() {
    try {
        await client.connect();
        console.log('DataBase Connected Successfully');
    }
    finally {
        //await client.close()
    }


}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Foodie server is Running');
});

app.listen(port, () => {
    console.log("Server running Port", port);
})