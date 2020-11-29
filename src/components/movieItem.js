import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// Imported card from bootstrap so that we could implement the stlye into our app

// This class stores the create component. 
export class MovieItem extends React.Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    // Lab 8 - Here a function is called from where we created the delete button, 
    // the movie id is logged to the console and deleted from the database. 
    DeleteMovie(e){
       e.preventDefault();
       console.log("Delete: "+this.props.movie._id);

       axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
       .then(( ) => {
           this.props.ReloadData();
       })

       .catch();
   }
   
    render() {
        return (
            <div>
               { /* Imported card stlye from bootstrap to give movie page a better UI */ }
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/*Width and height tags used to decide the size of the movie posters */}
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Lab 8 - here we create the red delete button that appears on the web page. */}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div>
        );
    }
}