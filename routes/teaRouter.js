const express = require('express');
const teaRouter = express.Router();

teaRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text-plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the tea to you');
})
.post((req, res) => {
    res.end(`Will add the tea: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /tea');
})
.delete((req, res) => {
    res.end('Deleting all tea');
});

module.exports = teaRouter;