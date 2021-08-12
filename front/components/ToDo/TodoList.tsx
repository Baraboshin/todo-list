import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todoTypes';

interface IProps {
  todos: Todo.ITodo[],
  onToggle: (id: number | Date) => void,
}

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

const TodoList: React.FC<IProps> = ({todos, onToggle}) => {
  return(
    <ul style={styles.ul}>
      {
        todos.map((todo, idx) => {
          return (
            <TodoItem todo={todo} key={idx} onChange={onToggle}/>
          );
        })
      }
    </ul>
  );
};

export default TodoList;
