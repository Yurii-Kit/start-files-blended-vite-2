import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
// import { useState } from 'react';

// const Form = ({ onSubmit }) => {
//   const [value, setValue] = useState('');

//   const submitHandler = e => {
//     e.preventDefault();
//     if(!value.trim()) return;
//     onSubmit(value)
//     setValue('')
//   };

//   return (
//     <form className={style.form} onSubmit={submitHandler}>
//       <button className={style.button} type="submit">
//         <FiSearch size="16px" />
//       </button>

//       <input
//         className={style.input}
//         placeholder="What do you want to write?"
//         name="search"
//         required
//         autoFocus
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// };

// export default Form;


const Form = ({ onSubmit }) => {
  const submitHandler = e => {
    e.preventDefault();
    const inputValue = e.target.elements['search'].value
    if(!inputValue.trim()) return;
    onSubmit(inputValue)
    e.target.reset()
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;