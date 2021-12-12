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
  const { todoText, onChange, onClick, disabled } = props; //disabledは未完了Todoの数を監視する
  return (
    //ここのstyleを変更することで上記したstyleを当てれる
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Todo.同じ名前のTodoは禁止"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
