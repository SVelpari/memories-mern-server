import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({imit: '30mb', extended: true}))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Memories App');
})


//https://www.mongodb.com/cloud/atlas
// const CONNECTION_URL = 'mongodb+srv://Saravanaa:ElonMusk%231@cluster0.7nwcnjm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false); //deprecated now

