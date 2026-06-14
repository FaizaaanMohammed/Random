const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']) // Forces fallback to Google's public DNS
dns.setDefaultResultOrder('ipv4first');
const connectDB = require('./app/config/db');
const dotenv = require('dotenv');
const express = require('express');
const ParentRouters = require('./app/routes/product')


dotenv.config()

connectDB()

const app = express();

app.use(express.json());


app.use('/api/products', ParentRouters)

app.get('/' , (req ,res)=>{
    res.send("Crud Is Running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});