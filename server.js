var cors = require('cors');
var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

require('./app/routes')(app,{});
//var apiRouter = express.Router();

// apiRouter.get('/', function(req,res) {
//   res.json({message : 'Horray! your API is working!'})
// });



app

  .use(cors())
  //.use('/api', apiRouter)
  .listen(port, function()
    {
      console.log('API magic happening on port ' + port);
    });
