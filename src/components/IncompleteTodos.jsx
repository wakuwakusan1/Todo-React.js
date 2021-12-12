import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了Todo</p>
      <ul>
        {todos.map((todo, index) => {
          //indexはTodoの何番目かを数えるもの
          return (
            //keyはDOMで使用する[差分]を比較する目印
            //mapなどでレンダリングしていくときにkeyを忘れずに書く
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div> //onClickDeleteだけだと再レンダリングされたときに何回も関数を呼び出すからアロー関数で防ぐ
          );
        })}
      </ul>
    </div>
  );
};
