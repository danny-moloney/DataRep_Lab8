import React from 'react';
import {MovieItem} from './movieItem';

// This class stores the movies component. 
export class Movies extends React.Component{

    render(){
        return this.props.movies.map((movie)=>{
            // Lab 8 - The reloaded data from the database is passed from the parent to each 
            // of the grandchildren using the reload data method here.
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>

        })
    }
}
{/*.props is short for properties */}
{/*The movieItem tag is used to imbed the movie informstion into the movie page on the app */}