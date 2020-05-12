import React, { useState } from "react";
import firebaseApp from "./config/firebaseApp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Todo(props) {
  const history = useHistory();
  const [bal, setBal] = useState("");
  const [click, setClick] = useState(false);
  const dataone = firebaseApp.database().ref("todo/");
  const idx = props.location.state.idx;
  dataone.on("value", (snap) => console.log(snap.val()));
  useEffect(() => {
    if (click === true) {
      if (idx === 1) {
        dataone.update({
          one: bal,
        });
        setClick(false);
      }
      if (idx === 2) {
        dataone.update({
          two: bal,
        });
        setClick(false);
      }
      if (idx === 3) {
        dataone.update({
          three: bal,
        });
        setClick(false);
      }
      if (idx === 4) {
        dataone.update({
          four: bal,
        });
        setClick(false);
      }
      if (idx === 5) {
        dataone.update({
          five: bal,
        });
        setClick(false);
      }
      if (idx === 6) {
        dataone.update({
          six: bal,
        });
        setClick(false);
      }
      if (idx === 7) {
        dataone.update({
          seven: bal,
        });
        setClick(false);
      }
    }
    return () => {};
  }, [click, bal, dataone]);
  return (
    <div className="input">
      메모해주세요
      <div>
        <input
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            setBal(val);
          }}
        />
      </div>
      <button
        onClick={() => {
          history.goBack();
          setClick(!click);
        }}
      >
        저장하기
      </button>
    </div>
  );
}

export default Todo;
