import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';

const TodoListItem = ({ id, content, number, handleDelete, handleEdit }) => {
  return (
    <div className={style.box}>
      <h3>TodoListItem</h3>
      <Text textAlign="center" marginBottom="20">
        TODO {`${number + 1}`}
      </Text>
      <Text>{content}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => handleDelete(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => {
          handleEdit({ id, text: content });
        }}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
