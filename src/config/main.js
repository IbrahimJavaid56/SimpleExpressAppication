import mongoose from 'mongoose';
import express,{json} from 'express';
import { mySchema,MyModel } from '../models/user.js';
import { resolve } from 'path';
import { error } from 'console';
const app = express();
const port = 3000;
app.use(json()); // Parse JSON request bodies

mongoose.connect('mongodb://127.0.0.1:27017/DBFOREXPRESS')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
});

// // POST USER
app.post('/user', (req, res) => {
    const newItem = MyModel(req.body);
    newItem
      .save()
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

// // GET OPEARTION FOR GETTING A SINGLE USER.
app.get('/user/:id',(req, res)=>{ 
    MyModel.findById(req.params.id)
    .then((resolve)=>{
        return res.status(200).json(resolve);
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

// // GET OPERATION FOR GETTING N NUMBER OF USERS.

app.get('/users/:count',(req, res)=>{ 
    MyModel.find().limit(req.params.count)
    .then((users)=>{
        return res.json(users);
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});