import { useState, useCallback } from "react";
export const useAction = (listStudent) => {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState([]);

  const getResult = useCallback(() => {
    let temp = [];
    listStudent.map((item) => {
      if (item.includes(textInput)) temp.push(item);
    });
    setResult(temp?.toString());
  }, [textInput]);

  return [textInput, result, { setTextInput, getResult }];
};
