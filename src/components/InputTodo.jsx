import React from "react";

//CSS-in-JS記法
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    //ここのstyleを変更することで上記したstyleを当てれる
    <div style={style}>
      <input
        placeholder="ここにTodoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
