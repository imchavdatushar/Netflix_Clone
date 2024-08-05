import mongoose from "mongoose";



const myListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: Array,
})


const myList = mongoose.model('mylist', myListSchema);

export default myList;