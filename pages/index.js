import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";

//배열의 첫번째가 value, 두번째 state 변경하는 함수 value 2번째 함수로만 바꿔야한다

const Home = () => {
  const [todo, setTodo] = useState([
    { content: " 인티!!" },
    { content: " 인티3333!!" },
    { content: " 인티!!4444" },
  ]); //to do list 배열
  const [input, setInput] = useState(""); //상태 인풋
  const newTodo = () => todo.concat({ content: input });

  const removeTodo = (i) => {
    return todo.filter((item, index) => {
      return i !== index;
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setTodo(newTodo);
          console.log(count);
          setInput("");
        }}
      >
        확인
      </button>
      <div>
        {todo.map((item, i) => {
          return <TodoItem key={i} {...{ item, setTodo, todo }} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
