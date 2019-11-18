var express = require('express');
var debug = require('debug')('app');
var chalk = require('chalk');
var morgan = require('morgan')

//starting my express server
var myServer = express();

//using middleware
myServer.use(morgan('tiny'));


// myServer serving pages
myServer.get('/',(req,res)=>{
    res.send('Terminator the Dark fate 1080p blu-ray is downloading....')
});

//listening
 myServer.listen(4000,()=>{
     debug(`listening on port ${chalk.green('4000')}`)
 })