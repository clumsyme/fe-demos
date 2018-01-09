import React, { Component } from 'react'
import StarWars from './sw'

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Movies</h1>
                <StarWars />
            </div>
        )
    }
}

export default Movie