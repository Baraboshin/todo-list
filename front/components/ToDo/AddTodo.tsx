import React, { useState, MouseEvent } from 'react'

const style = {
  form: {
    display: 'flex',
    margin: '10px 0',
  },
  input: {
    flexGrow: 1,
    padding: '5px',
    height: '30px',
    marginRight: '10px',
  },
  button: {
    height: '30px',
  }
};

interface IProps {
  onCreate:(title: string) => void,
}

const AddTodo: React.FC<IProps> = ({ onCreate }) => {
  const [value, setValue] = useState('');

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    if (value.trim()){
      onCreate(value);
      setValue('')
    }
  }

  return(
    <form style={style.form} onSubmit={submitHandler}>
      <input
        className={'form-control'}
        style={style.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className='btn btn-primary' disabled={!value}>Добавить задачу</button>
    </form>
  )
}

export default AddTodo
