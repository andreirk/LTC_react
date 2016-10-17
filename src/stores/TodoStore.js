import { EventEmitter } from 'events'

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
    }

    getAll() {
        return this._todos
    }

}

const todoStore = new TodoStore;

export default todoStore