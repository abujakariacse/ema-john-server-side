const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

// MiddleWare
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rsfpg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('DB CONNECTED')
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('Ema John CRUD Operation is Running')
})

app.listen(port, () => {
    console.log('Server is Running on Port', port)
})