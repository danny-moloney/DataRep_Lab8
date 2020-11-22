import React from 'react';
import axios from 'axios';
// This class stores the create component. 
export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        // Lab 6 - The title, year and poster are used here to make an object to be passed up to the server.
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }

        // Lab 6 - Here the post request is made asynchronously to send data onto the server.
        axios.post('http://localhost:4000/api/movies',newMovie)
        
        // Lab 6 - The .then method is the happy path and the .catch method is called if there is a bug.
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        });

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>

                <div className='form-group'>
                    <label>Movies Poster:</label>
                    <textarea type='text'
                    className='form-control'
                    value={this.state.Poster}
                    onChange={this.onChangePoster}></textarea>


                </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>



            </div>
        );
    }
}