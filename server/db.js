import mongoose from "mongoose";




const URL = "mongodb://localhost:27017/Netflix";


const Connection = () => {
    try {
        mongoose.connect(URL , {useUnifiedTopology : true , })
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connection with the database", error.message);
    }
}

export default Connection;