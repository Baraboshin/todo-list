import React, {useCallback} from 'react';
import TodoList from '../../components/ToDo/TodoList';
import AddTodo from '../../components/ToDo/AddTodo';
import todoContext from '../../context/todoContext';
import Modal from 'react-modal';
import _ from 'lodash';
import { Todo } from '../../types/todoTypes';

function App() {
  const [todos, setTodos] = React.useState<Todo.ITodo[]>(
    [
      {
        id: 1,
        completed: false,
        title: 'Создать список дел на React',
      },
      {
        id: 2,
        completed: true,
        title: 'Заказать комплектующие для ПК',
      },
      {
        id: 3,
        completed: false,
        title: 'Собрать ПК',
      },
    ],
  );

  const [todoEdit, setTodoEdit] = React.useState<Todo.ITodo>({
    title: '',
    id: Date.now(),
    completed: false,
  });

  const [innerTodoEdit, setInnerTodoEdit] = React.useState<Todo.ITodo>(todoEdit);

  const markTodoOnEdit = useCallback((todo) => {
    setTodoEdit({...todo});
    setInnerTodoEdit({...todo});
  }, []);

  function applyTodoChanges() {

    setTodos(todos.map(todo => {
      if (todo.id === innerTodoEdit.id)
        return innerTodoEdit;
      return todo;
    }));

    setTodoEdit({
      title: '',
      id: Date.now(),
      completed: false,
    });
    setInnerTodoEdit({...todoEdit});
  }

  function toggleTodo(id: number | Date):void {
    const toggleIdxElement = todos.findIndex(todo => todo.id === id);
    if (toggleIdxElement === -1) {
      throw new Error('Не удалось найти выбранный элемент');
    };
    const newTodos = [...todos];
    newTodos[toggleIdxElement].completed = !newTodos[toggleIdxElement].completed;
    setTodos([...newTodos]);
  }

  function removeTodo(id: number | Date) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title: string) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]));
  }

  return (
    <>
      <todoContext.Provider value={{removeTodo, markTodoOnEdit}}>
        <div className={'wrapper'}>
          <div className={'list'}>
            <header>
              <h1>Список задач</h1>
              <AddTodo onCreate={addTodo}/>
              {!todos.length && <p className={'list-empty'}>Список задач пуст</p>}
            </header>
            <TodoList todos={todos} onToggle={toggleTodo}/>
          </div>
        </div>
      </todoContext.Provider>
      <Modal
        isOpen={ !!todoEdit.title }
        ariaHideApp={ false }
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(20, 20, 20, 0.9)',
          },
          content: {
            position: 'static',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >
        <h2 style={{marginTop: '0px',  marginBottom: '20px'}}>Редактирование задачи</h2>
        <input
          style={{width: '100%', marginBottom: '20px'}}
          type={'text'}
          value={ innerTodoEdit.title }
          onChange={(event) => setInnerTodoEdit({...innerTodoEdit, title: event.target.value})}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <button
            onClick={applyTodoChanges}
            className={'btn btn-primary'}
            disabled={_.isEqual(todoEdit, innerTodoEdit)}
          >
            Сохранить
          </button>
          <button
            className={'btn btn-light'}
            onClick={()=>{ setTodoEdit({
              title: '',
              id: Date.now(),
              completed: false,
            });}}
          >
            Отмена
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
