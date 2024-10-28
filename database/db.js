const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sulochana:Sulo@2001@cluster0.4j7rt.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected Successfully");
        
    }catch (error){
        console.error("MongoDB connection error:" error);
    }
}

module.exports = {mongoose, connectDB}
