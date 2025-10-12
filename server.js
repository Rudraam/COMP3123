const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

// TODO - Update your mongoDB Atlas Url here to Connect to the database
const DB_URL = process.env.DB_URL || "mongodb+srv://comp3123_user:admin123@assignment1.owfezx1.mongodb.net/?retryWrites=true&w=majority&appName=Assignment1";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

// Use note routes
app.use('/api', noteRoutes);

// Connect to the database
mongoose.connect(DB_URL).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
