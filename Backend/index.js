import express from "express";
const app = express()
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";


// Import All the Routes
import skillsRouter from "./routes/Skills.js";
import projectRouter from "./routes/Projects.js";
import EducationRouter from "./routes/Education.js";
import experienceRouter from "./routes/Experience.js"
// import authRouter from "./routes/Auth.js";
import AboutRouter from "./routes/About.js";
import HomeRouter from "./routes/Home.js";



// MIDDLEWARES
app.use(express.json());
app.use(cors());




// Error Handle
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
});



// ROUTES Connection with App
app.use('/api/skills', skillsRouter);
app.use('/api/projects',projectRouter);
app.use('/api/education',EducationRouter);
app.use('/api/experience',experienceRouter);
// app.use('/api/auth',authRouter);
app.use('/api/about',AboutRouter);
app.use('/api/home/',HomeRouter);



// Server Home Page
app.get("/", async (req, res) => {
    res.status(200).json({
      message: "Hello developer, Portfolio's Backend Code is running Perfectly :)",
    });
});




// Database connection
const connectDB = async()=> {
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is Connected successfully");
    }
    catch(err){
        console.error("Database Connection FAILED!!!!")
        console.error(err);
    }
}



// Run the Server
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> {
    connectDB();
    console.log(`App is Running on Port ${PORT}`);
})