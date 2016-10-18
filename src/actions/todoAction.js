import dispatcher from '../dispatcher'

export function createTodo(text) {
    console.log('in create action', text );
    
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    })  
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    })  
} 