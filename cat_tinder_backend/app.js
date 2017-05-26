var express = require('express');
var bodyParser = require('body-parser')
var Cat = require('./models').Cat
var cors = require('cors')

var app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())



app.get('/cats', function (request, response) {
  Cat.findAll().then(function(cats){
    response.status(200)
    response.json({message: "success", cats: cats})

  })
  // response.json({message: 'API Example App'})
});


//create request.body.cat
app.post('/create-cat', function(request, response){
  Cat.create(request.body.cat).then(function(cat){
    response.status(200)
    response.json({message: "success", cat: cat})
  }).catch(function(error){
    console.log('fail');
    response.status(400)
    response.json({message: "fail", error: error})
  })
})

app.listen(4000, function () {
 console.log('Todo Server listening on port 4000!');
});
