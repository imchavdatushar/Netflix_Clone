import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
         unique : true
    },
    password: {
        type: String,
        required: true
    },
})


const user = mongoose.model('user', UserSchema);

export default user;