const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()


const user_route = require("./routes/user")
const pages_route = require("./routes/Pages")
const contact_route = require('./routes/Contact')
const blog_route = require('./routes/Blog')

const protfolio_route = require('./routes/Protfolio')
const cors = require("cors")
const path = require('path')

const app = express();

// global middleware
app.use(express.static('public'))
app.use(express.json());
app.use(cors())

app.use("/api/user", user_route)

app.use("/api/pages", pages_route)
app.use("/api/contact", contact_route)
app.use("/api/blog", blog_route)

app.use("/portfolio", protfolio_route)



var mongoDB = 'mongodb://localhost:27017/mywebsite';
mongoose.connect(mongoDB, { useNewUrlParser: true });






app.listen(process.env.PORT);