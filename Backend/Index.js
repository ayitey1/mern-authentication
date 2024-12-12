const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserR = require('./routes/users')
const PinRoutes = require('./routes/pins');
const cors = require('cors');


const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001', // Replace with the origin of your client
  }));


dotenv.config();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology:true,})
.then(() => {
    console.log('mongoose connected')
})
.catch((err) => console.log(err));

app.use('/api/users',UserR);
app.use('/api/pins', PinRoutes);



app.listen(PORT, ()=>{
    console.log("server is at http://localhost:" + PORT);
})



    

