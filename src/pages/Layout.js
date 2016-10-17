import React, {Component, PropTypes} from 'react'
import { Link } from "react-router"
 
export default class Layout extends Component { 

    constructor() {
        super();
        this.state = {
            title: "Welcome"
        }
    }

    render() {

        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to='archives'>archives</Link>
                <Link to='settings'><button className='btn btn-primary' >settings</button></Link>
                <button onClick={this.navigate} >GO HOME </button>
            </div>
        )
    }

    navigate = () => { this.props.history.pushState(null, '/')}
}