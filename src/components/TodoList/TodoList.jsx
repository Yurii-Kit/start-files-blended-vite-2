import TodoListItem from '../TodoListItem/TodoListItem';
import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';

const TodoList = ({ todos, onUpdate, onEditTodo }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            content={text}
            number={index}
            handleDelete={onUpdate}
            handleEdit={onEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
