import {MongoClient} from 'mongodb';

const express = require('express');
const body = require('body-parser');

async function start() {
    try{

        const app = express();
        const mongo = await MongoClient.connect('mongodb://localhost:27017/customer-store')
        app.db = mongo.db();


        //body parser

        app.use(body.json({
            limit: '500kb',
        }));

        //Routes
        const customersRoute = require('./routes/customers');
        app.use('/api/v1', customersRoute);

        //Start server

        app.listen(3000, () => {
        console.log('Listening on http://localhost:3000');
        })

    } catch (err) {
        console.log(err);
    }
}

start();

