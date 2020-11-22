import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//this class stores the read component
{/* the red text is all the information that will feature on the app page, including movie name, year and poster. */}
export class Read extends React.Component{
    
    state = {
        movies: [ ]
            
    };

    /* Lab 4 - Here is the url for the list of new movies that appear on the read page of the app. 
       Lab 4 - The "then method" is used to update the movies property with the data from the given url.
       Lab 4 - The "catch method" is used to log an error to the console of the browser. */
    // Lab 6 - A new api from localhost:4000 is used here so that the data is now gotten from there.
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then(

(response)=>{
    this.setState({ movies: response.data})
}           
        )
        .catch(
            (error)=>{ console.log(error)}
        );

        }

    render(){
        return(
            <div>
                
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
{/*The tag above sends information about the movies to the component movies. */}