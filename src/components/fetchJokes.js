import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetch_Jokes} from '../store/actions/index'
import './fetchjokes.css'

class FetchJokes extends Component {

    componentDidMount(){
        this.props.fetch_Jokes()
    }

    renderList(){
        return this.props.jokes.map(joke => {
            console.log(joke)
            return (
                <div className = "w3-container">
                        <h1 className = "title">
                            {joke.joke}
                        </h1>
                    </div>
            )
        })
    }
    render() {
        // console.log(this.props.jokes);
        return (
            <div>
                <h1 className = "random">Random Jokes</h1>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { jokes : Object.values(state.jokes)}
}

export default connect(mapStateToProps , {fetch_Jokes})(FetchJokes)







// {joke.joke}
// <br/>
// {joke.categories}