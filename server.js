const express = require('express');
const morgan = require('morgan');
const teaRouter = require('./routes/teaRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/teas', teaRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



// app.get('/tea/:teaId', (req, res) => {
//     res.end(`Will send details of the tea: ${req.params.teaId} to you`);
// });

// app.post('/tea/:teaId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /tea/${req.params.teaId}`);
// });

// app.put('/tea/:teaId', (req, res) => {
//     res.write(`Updating the tea: ${req.params.teaId}\n`);
//     res.end(`Will update the tea: ${req.body.name}
//         with description: ${req.body.description}`);
// });

// app.delete('/tea/:teaId', (req, res) => {
//     res.end(`Deleting tea: ${req.params.teaId}`);
// });
 
 