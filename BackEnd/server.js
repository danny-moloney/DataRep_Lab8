// Lab 6 - Documentation from expressjs.com provides us with code for a basic server. 
const express = require('express')
const app = express()

// Lab 6 - Localhost port changed to 4000 so that we can run two different webservers at the same time.
const port = 4000
const cors = require('cors');

// Lab 6 - This will allow us to intercept the body of the http message that is being passed up in a port request.
const bodyParser = require("body-parser");

// Lab 7 - This will allow us to use all the libraries that contain mongoose documentation in our app.
const mongoose = require('mongoose');

// the 'use' property is here so that the cors package is used everytime.
app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:Googleeye1@cluster0.yjqov.mongodb.net/movies?retryWrites=true&w=majority';
// Lab 7 - This line of code connects our app to the mongoose database.
mongoose.connect(myConnectionString, {useNewUrlParser: true});

// Lab 7 - Here we define our scheme about the type of data we want to store in our database.
const Schema = mongoose.Schema;
var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

// Lab 7 - Her we use the newly created schema to create a model for our database.
var MovieModel = mongoose.model("movie", movieSchema);

// Lab 6 - Here a new route point is added, the url is also extended to include the movies link that sends back the json data.
app.get('/api/movies', (req, res) => {
    
    // const mymovies = [{
    //     "Title":"Avengers: Infinity War",
    //     "Year":"2018",
    //     "imdbID":"tt4154756",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //     "Title":"Captain America: Civil War",
    //     "Year":"2016",
    //     "imdbID":"tt3498820",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //     "Title":"World War Z",
    //     "Year":"2013",
    //     "imdbID":"tt0816711",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
    //     ];

// Lab 7 - Here we use the find method which will be used to find all the documents in the database
MovieModel.find((err, data)=>{
    res.json(data)
})

    // Lab 6 - Here we send the status code 200 to the web server.
    // res.status(200).json({
    //     message:"Everything is ok", 
    //     movies:mymovies});

})

// Lab 7 - This get request is going to listen for data coming in
app.get('/api/movies/:id', (req, res, next) => {
    console.log(req.params.id);

    // Lab 7 - Here the findById interacts with the id, it sends either an error or the data that has been received.
    MovieModel.findById(req.params.id,
    function (err, data) {
    res.json(data);
    });
})

// Lab 8 - This is listening for a http delete method, where the documents of the id that is being deleted will be passed up.
app.delete('/api/movies/:id',(req,res)=>{
    console.log('Delete movie: '+req.params.id);
    
    // Lab 8 - Here the id is of the movie being deleted is found and either an error or data is given back when the delete button is clicked.
    MovieModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })

})



// Lab 6 - A seperate post method is used here to listen for http methods
app.post('/api/movies', (req, res) => {
    console.log('Movie Received!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    // Lab 7 - Here we receive data from our application using the post method 
    MovieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })
    
    // Lab 7 - this confirms that the movie was added to the database.
    res.send('Item added');

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})