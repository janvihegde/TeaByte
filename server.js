const express = require('express');
const session = require('express-session');
const mysql = require('mysql2'); // Import MySQL library
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// MySQL Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Replace with your MySQL username
    password: '',         // Replace with your MySQL password
    database: 'JobPortal' // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL database.');
});

// Admin route to add a job or internship
app.post('/admin/job', (req, res) => {
    const { title, description, type, location } = req.body;
    const query = 'INSERT INTO jobs (title, description, type, location) VALUES (?, ?, ?, ?)';
    db.query(query, [title, description, type, location], (err, result) => {
        if (err) {
            console.error('Error adding job:', err);
            res.status(500).send('Error adding job.');
        } else {
            res.status(201).send('Job added successfully!');
        }
    });
});

// User route to fetch jobs and internships
app.get('/jobs', (req, res) => {
    const query = 'SELECT * FROM jobs ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching jobs:', err);
            res.status(500).send('Error fetching jobs.');
        } else {
            res.status(200).json(results);
        }
    });
});

// User route to apply for a job
app.post('/jobs/apply', (req, res) => {
    const { job_id, user_name, user_email, resume_link } = req.body;
    const query = 'INSERT INTO applications (job_id, user_name, user_email, resume_link) VALUES (?, ?, ?, ?)';
    db.query(query, [job_id, user_name, user_email, resume_link], (err, result) => {
        if (err) {
            console.error('Error applying for job:', err);
            res.status(500).send('Error applying for job.');
        } else {
            res.status(201).send('Application submitted successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
