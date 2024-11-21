import { useState, useEffect } from "react";

function saveColor(key, initialValue) {
  let save = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];

  if (save) {
    return save;
  }

  if (initialValue) {
    return initialValue;
  }
}

function Usecolor(key, initialValue) {
  const [color, setColor] = useState(() => {
    return saveColor(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(color));
  },[color]);

  return [color, setColor];
}

export default Usecolor;
