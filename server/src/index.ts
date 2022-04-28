require('dotenv').config();
import cors from 'cors';
import express from 'express';
import { checkToken } from './controllers/Token';
import tokenRoutes from './routes/Token';


const app = express();
const PORT = process.env.PORT||8080

app.use(express.json());
app.use(cors());
app.use(tokenRoutes);
app.use(checkToken);



app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})