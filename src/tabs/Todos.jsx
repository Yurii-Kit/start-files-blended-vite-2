// import Text from '../components/Text/Text';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { useState, useEffect } from 'react';
import Text from '../components/Text/Text';
import EditForm from '../components/EditForm/EditForm';

const todosStart = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return todosStart;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  });

  const addNewTodo = inputValue => {
    // console.log(inputValue);
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), text: inputValue }]);
  };
  // console.log(todos);

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = todo => {
    console.log(todo);

    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = updatedText => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: updatedText } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList
        todos={todos}
        onUpdate={deleteTodo}
        onEditTodo={handleEditTodo}
      />
    </>
  );
};

export default Todos;
