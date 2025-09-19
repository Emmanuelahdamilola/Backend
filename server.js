import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from "./routes/contactRoutes.js"
import errorHandler from './middlewares/errorHandler.js';
import { createContact } from './controllers/contactController.js';
import connectDb from './config/dbConnection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

// Middlewares

app.use(express.json()); // allow us to pass the strings we get form client to the server- request body
app.use(errorHandler);


// routes
app.use("/api/contacts", contactRoutes);
app.use("/api/contacts", createContact)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
