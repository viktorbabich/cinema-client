import React, { useState } from "react";

export const List = () => {
  const [name, onGetName] = useState("Вася");

  const getList = () => {
    fetch("/api/getList")
      .then(res => {
        return res.json();
      })
      .then(data => {
        onGetName(data.name);
      });
  };
  return (
    <div>
      <div>List</div>
      <div>Имя: {name}</div>
      <div onClick={getList}>нажми</div>
    </div>
  );
};
