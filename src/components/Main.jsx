import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import { Link } from "react-router-dom";
import firebaseApp from "./config/firebaseApp";
import { useEffect } from "react";

function Main() {
  const firedataref = firebaseApp.database().ref("todo");
  const [mean, setMean] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  useEffect(() => {
    firedataref.once("value", (snapshot) => {
      const popo = snapshot.val();
      setMean(popo.one);
      setTwo(popo.two);
      setThree(popo.three);
      setFour(popo.four);
      setFive(popo.five);
      setSix(popo.six);
      setSeven(popo.seven);
    });
    return () => {};
  }, []);

  return (
    <div className="pack">
      <div className="week"></div>
      <div className="date">
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 1,
            },
          }}
          className="one"
        >
          1 <br />
          {mean}
        </Link>
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 2,
            },
          }}
          className="two"
        >
          2 <br />
          {two}
        </Link>
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 3,
            },
          }}
          className="three"
        >
          3 <br />
          {three}
        </Link>
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 4,
            },
          }}
          className="four"
        >
          4 <br />
          {four}
        </Link>
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 5,
            },
          }}
          className="five"
        >
          5 <br />
          {five}
        </Link>
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 6,
            },
          }}
          className="six"
        >
          6 <br />
          {six}
        </Link>
        <Link
          to={{
            pathname: "/todo",
            state: {
              idx: 7,
            },
          }}
          className="seven"
        >
          7 <br />
          {seven}
        </Link>
      </div>
    </div>
  );
}

export default Main;
