const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/tea',(req,res,next) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/tes', (req,res) => {
    res.end('Will send all the teasite to you');
});
app.post('./tea',(req,res) => {
    res.end(`Will add the teasite: ${req.body.name} with description ${req.body.description}`)
});
app.put('/tea', (req,res) => {
    res.status= 403;
    res.end('PUT operation noy support on /tea');
});
app.delete('/tea', (req,res) => {
    res.end('Delete all tea');
});


app.get('/tea/:teaId', (req, res) => {
    res.end(`Will send details of the tea: ${req.params.teaId} to you`);
});

app.post('/tea/:teaId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /tea/${req.params.teaId}`);
});

app.put('/tea/:teaId', (req, res) => {
    res.write(`Updating the tea: ${req.params.teaId}\n`);
    res.end(`Will update the tea: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/tea/:teaId', (req, res) => {
    res.end(`Deleting tea: ${req.params.teaId}`);
});
app.use(express.static(__dirname + '/public'));


app.use((req,res) => {
    
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('This is an Express Server');
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}/`);
})