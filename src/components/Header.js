import React, {Component, PropTypes} from 'react'
 
import Title from './Title';
 
export default class Header extends Component { 

    render() {
       
        return (
            <div>
                <Title title={this.props.title} ></Title>
                <input value={this.props.title} onChange={this.handleChage.bind(this)} type="text"/>
            </div>
  
        )
    }

    handleChage(ev) {
        const title = ev.target.value;
        this.props.changeTitle(title)
    }
}