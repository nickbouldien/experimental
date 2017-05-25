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

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

app.post('/create-cat', function(request, response){
  Cat.create(request.body).then(function(cat){
    console.log('success');
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
