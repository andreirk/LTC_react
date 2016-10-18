import { EventEmitter } from 'events'

import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
    constructor(){
        super()
        this._todos = [
                {
                    id: 12324434,
                    text: "GO shoping",
                    complite: false
                },
                {
                    id: 123423,
                    text: "Pay bills",
                    complite: false
                },
                {
                    id: 1232345,
                    text: "Call home",
                    complite: false
                },
                
            ]

        dispatcher.register((action) => {
            switch(action.type){
                case "CREATE_TODO": {
                    this.createTodo(action.text)
                    break;
                } 
            }            
        })
    }

    getAll() {
        return this._todos
    }

    createTodo(text) {
        const id = Date.now(); 
         this._todos.push({
             id,
             text,
             complite: false
         })

         this.emit('change');
    }


}

const todoStore = new TodoStore;


export default todoStore