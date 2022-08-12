import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback, useReducer } from 'react';

function createBulkList() {
  const result = [];
  for(let i = 1 ; i <= 2500 ; i += 1) {
    result.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  }
  return result;
}

const todoReducer = (todos, action) => {
  switch(action.type) {
    case 'INSERT': //{type: 'INSERT', todo: todo}
      return todos.concat(action.todo);
    case 'REMOVE': //{type: 'REMOVE', id: id}
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': //{type: 'TOGGLE', id; id}
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkList);
  const nextId = useRef(2501);

  /* 최적화 전 onInsert */
  // const onInsert = useCallback(
  //   text => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   }, [todos]
  // );
  /* 최적화 후 onInsert : useState의 함수형 업데이트 */
  // const onInsert = useCallback(text => {
  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false
  //   };
  //   setTodos(todos => todos.concat(todo));
  //   nextId.current += 1;
  // }, []);
  /* 최적화 후 onInsert : useReducer 사용 */
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      chekced: false
    };
    dispatch({type: 'INSERT', todo});
    nextId.current += 1;
  }, []);


  /* 최적화 전 onRemove */
  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos.filter(todo => {
  //       return todo.id !== id;
  //     }));
  //   }, [todos]
  // );
  /* 최적화 후 onRemove : useState의 함수형 업데이트 */
  // const onRemove = useCallback(id => {
  //   setTodos(todos => todos.filter(todo => todo.id !== id));
  // }, []);
  /* 최적화 후 onRemove : useReducer 사용 */
  const onRemove = useCallback(id => {
    dispatch({type: 'REMOVE', id});
  }, []);


  /* 최적화 전 onToggle */
  // const onToggle = useCallback(
  //   id => {
  //     setTodos(todos.map(todo => {
  //       return todo.id === id ? {...todo, checked: !todo.checked} : todo ;
  //     }));
  //   }, [todos]
  // );
  /* 최적화 후 onToggle : useState의 함수형 업데이트 */
  // const onToggle = useCallback(id => {
  //   setTodos(todos => todos.map(todo => 
  //     todo.id === id ? {...todo, checked: !todo.checked} : todo
  //   ));
  // }, []);
  /* 최적화 후 onToggle : useReducer 사용 */
  const onToggle = useCallback(id => {
    dispatch({type: 'TOGGLE', id});
  }, []);


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
export default App;