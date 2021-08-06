const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv  = require('dotenv')
const emproutes = require('./routes/emp')
const cors = require('cors')

console.clear()
dotenv.config();

const port = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_ACCESS, {
  useCreateIndex : true,
  useNewUrlParser : true,
  useUnifiedTopology : true
}, () => console.log("Database connected successfully"))


app.use(express.json())
app.use(cors())
app.use('/app', emproutes)
app.listen(port, () => {
  console.log(`Server is running on `,{port});
});