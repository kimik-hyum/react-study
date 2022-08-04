import { useEffect, useState } from "react";

export default function TodoItem({ item, setTodo, todo, index }) {
  const [modify, setModify] = useState(false);
  const [modifyInput, setModifyInput] = useState(item.content);
  return (
    <div>
      {modify ? (
        <>
          <input
            type="text"
            value={modifyInput}
            name=""
            id=""
            onChange={(e) => setModifyInput(e.target.value)}
          />
          <button
            onClick={() => {
              setTodo(
                todo.map((item, i) =>
                  i === index ? { content: modifyInput } : item
                )
              );
              setModify(false);
            }}
          >
            확인
          </button>
        </>
      ) : (
        item.content
      )}
      <button onClick={() => setModify(!modify)}>편집</button>
      <button onClick={() => setTodo(todo.filter((item, i) => i !== index))}>
        삭제
      </button>
    </div>
  );
}
