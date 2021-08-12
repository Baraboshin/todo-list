import React from 'react';
import { Todo } from '../types/todoTypes';

const todoContext = React.createContext<Todo.ContextType | null>(null);

export default todoContext;
