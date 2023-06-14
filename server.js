import express from 'express';
import config from '../db/config.js';
import phoneBookRoutes from './src/routes/phoneBookRoutes.js';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
phoneBookRoutes(app);
app.get("/",(req,res)=>{
    res.send("Hello World");

})
app.listen(config.port,()=>{
    console.log(`Server is running on port ${config.port}`);

});