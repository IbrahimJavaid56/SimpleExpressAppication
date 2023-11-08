import mongoose from "mongoose";
// Define the schema
export const mySchema = new mongoose.Schema({
    username: String,
    age: Number,
    email: String,
    salary: Number
  });

// Create a Mongoose model
export const MyModel = mongoose.model('MyModel', mySchema);

// export const UserOne = new MyModel({
//     username: 'ali',
//     age : 20,
//     email: 'ali89@gmail.com',
//     salary: 40000
// })
// UserOne.save();