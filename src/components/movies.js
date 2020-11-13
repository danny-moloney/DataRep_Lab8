import React from 'react';
import {MovieItem} from './movieItem';

// This class stores the movies component. 
export class Movies extends React.Component{

    render(){
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie}></MovieItem>

        })
    }
}
{/*.props is short for properties */}
{/*The movieItem tag is used to imbed the movie informstion into the movie page on the app */}