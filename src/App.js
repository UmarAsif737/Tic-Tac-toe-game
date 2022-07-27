import { useState, useEffect } from "react";
const initVal = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [signs, setSigns] = useState(initVal);
  const [player, setPlayer] = useState("X");

  const winPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWin();
    checkTie();
    if (player === "X") {
      setPlayer("O");
    } else if (player === "O") {
      setPlayer("X");
    }
  }, [signs]);

  function checkWin() {
    const condition = winPat.map((x, i) =>
      x.map((y) => signs[y]).every((z) => z === player)
    );

    if (condition.find((k) => k === true)) {
      setTimeout(() => {
        alert("Won : " + player + " Click Ok to Play again");
        setSigns(initVal);
      }, 100);
    }
  }

  function checkTie() {
    const condition = winPat.map((x, i) =>
      x.map((y) => signs[y]).every((z) => z === player)
    );

    if (signs.every((f) => f !== "") && condition.every((k) => k !== true)) {
      setTimeout(() => {
        alert("No one Won. Click Ok to Play again");
        setSigns(initVal);
      }, 100);
    }
  }

  const addSign = (index) => {
    if (signs.find((x, j) => j === index)) return null;
    setSigns(
      signs.map((sign, idx) => {
        if (idx == index && signs[index] === "") {
          return player;
        }
        return sign;
      })
    );
  };

  return (
    <div className=" bg-gradient-to-b from-blue-800 to-purple-600 h-screen w-screen">
      <div className="flex flex-col justify-center h-full items-center ">
        <h1 className="text-4xl pb-2 font-Mochiy text-white">TIC TAC TOE</h1>
        <div className="border-4 border-gray-600 h-96 w-96 grid grid-cols-3">
          {signs.map((val, i) => (
            <div
              onClick={() => addSign(i)}
              className="h-32 w-32 border-2 border-black flex items-center justify-center text-4xl text-black bg-slate-400 cursor-pointer active:bg-slate-300"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
