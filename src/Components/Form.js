import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Item from './Item';
export default function Form() {
  const [dataArr, setDataArr] = useState([
    {
      id: 1,
      text: 'jordan',
    },
    { id: 2, text: 'jordy' },
    { id: 3, text: 'kevin' },
    { id: 4, text: 'kevin' },
    { id: 5, text: 'kevin' },
  ]);
  const [text, setText] = useState('');

  const deleteTask = (id) => {
    const taskDelete = dataArr.filter((d) => d.id !== id);
    setDataArr(taskDelete);
  };

  const addTask = (e) => {
    e.preventDefault();
    const newArr = [...dataArr];
    const newTodo = {};

    newTodo.text = text;
    newTodo.id = uuidv4();
    
    newArr.push(newTodo);
    setDataArr(newArr);
    
    setText('');
  };

  return (
    <div className='mb-4  md:flex-col justify-center items-center'>
      <form className='mb-3' onSubmit={(e) => addTask(e)}>
        <label htmlFor='todo' className='block text-gray-700 mb-3'>
          Chose à faire !
        </label>
        <input
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
          type='text'
          id='todo'
          name='todo'
          className='border shadow innder py-1 px-4 text-gray-700 w-full mb-2 focus:shadow-outline'
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2'>
          Ajouter
        </button>
      </form>
      <h2>Liste des choses à faire : </h2>
      <ul>
        {dataArr.map((item) => {
          return (
            <div key={item.id}>
              <Item deleteTask={deleteTask} text={item.text} id={item.id} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
