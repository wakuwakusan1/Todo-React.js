import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  //ああああ、いいいい、うううう、はデバッグ用の初期値 //コメントアウト解除で初期入力値
  const [incompleteTodos, setIncompleteTodos] = useState([
    //"ああああ",
    //"いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    /*"うううう"*/
  ]);

  //inputの要素がonChangeで変更があったときに,入ってくるイベント
  //event.target.valueに入り、setTodoTextのuseStateを空白から書き換える
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; //入力されていないのに追加ボタンが押されたときの処理
    //...は元の配列を傷つけずに配列のコピーをする。その後ろに新しいTodoを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  ///削除ボタンが押された時の処理
  //indexは何番目かを見るためにつける
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタンが押された時の処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); //spliceで消す（更新）

    //未完了のTodoのindex番目を完了のTodoの後ろにくっつけて新しい配列へ格納する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻るボタンが押された時の処理
  const onClickBack = (index) => {
    //完了リストからの削除処理
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); //index番目を１つ削除する

    //未完了のTodoに追加する処理 //完了のTodoのindex番目を未完了のTodoリストへ追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos); //更新 //setCompleteTodosを呼び出してnewCompleteTodosを設定する
    setIncompleteTodos(newIncompleteTodos); //更新
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5} //未完了Todoが５以上でtrueになるdisabledを渡す
      />

      {incompleteTodos.length >= 5 && ( //未完了Todoが５以上になったら警告を出す
        <p style={{ color: "red" }}>
          登録できるTodoは５個までだよ。消化してね。
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
