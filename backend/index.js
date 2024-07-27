const app = express();
import dotenv from "dotenv"
import express from "express"
import cors from 'cors'
app.use(express.json());
app.use(cors())
dotenv.config();

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on PORT no ${PORT}`);
})