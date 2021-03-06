import React from 'react';

class TodoDetailView extends React.Component {
    render() {
        const {todo, removeTodo} = this.props;
        return(
            <div>
                <p>{todo.body}</p>
                <button onClick={removeTodo}>Delete Todo</button>
            </div>
        )
    }
}

export default TodoDetailView;