import React, { useState, useCallback } from "react";
import { useAction } from "./customhook";
function App() {
  const listStudent = ["Huyen", "Hoa", "Hung", "Long"];
  const [textInput, result, { setTextInput, getResult }] = useAction(listStudent);
  return (
    <div className="main">
      <div className="list-student">
        <p>学生一覧：[{listStudent.toString()}]</p>
      </div>
      <p>検索する名前を入力してください。</p>
      <input
        type="text"
        value={textInput}
        onChange={(event) => setTextInput(event.target.value)}
      />
      <br/>
      <button className="action" onClick={getResult}>
        検索
      </button>
      <p>検索ワード：{textInput}</p>
      <p>検索結果：[{result}]</p>
    </div>
  );
}

export default App;