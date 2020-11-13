import React from 'react';
import Card from 'react-bootstrap/Card';
{/* Imported card from bootstrap so that we could implement the stlye into our app*/}

// This class stores the create component. 
export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                {/*Imported card stlye from bootstrap to give movie page a better UI */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/*Width and height tags used to decide the size of the movie posters */}
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}