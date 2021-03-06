import React, {Component, PropTypes} from 'react'

import Todo from './Todo'
import * as TodoActions from '../actions/todoAction'
import TodoStore from '../stores/TodoStore'
 
export default class Features extends Component { 

    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    componentWillMount() {
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })
    
        
        return (
        
            <div>
                <button onClick={this.createTodo} >Create</button>
             <h1>Todos</h1>
             <ul>
                {TodoComponents}
             </ul>
            </div>
        )
    }

    /**
     *  an Action Create todo handler
     */
    createTodo = () => {
    TodoActions.createTodo(Date.now())
} 
}