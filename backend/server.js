const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.post('/', (req, res) => {
  // Assuming you have a database connection here
  
  // Process the received data and store it in the database
  const { name, email } = req.body;
  
  // Example: Insert data into a database
  // Your actual implementation will depend on the database you're using
  // Example using MySQL
  // connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
  //   if (error) {
  //     throw error;
  //   }
  //   res.json({ message: 'Data received successfully', data: results });
  // });
  
  // For demonstration purposes, just sending back a response
  res.json({ message: 'Data received successfully', name, email });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
