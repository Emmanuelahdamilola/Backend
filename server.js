import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // allow us to pass the strings we get form client to the server- request body


app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
