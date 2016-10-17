import React, {Component, PropTypes} from 'react'

import Todo from './Todo'
import TodoStore from '../stores/TodoStore'
 
export default class Features extends Component { 

    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />
        })
        return (

            <div>
             <h1>Todos</h1>
             <ul>
                {TodoComponents}
             </ul>
            </div>
        )
    }
}