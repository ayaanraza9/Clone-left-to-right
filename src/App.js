import { useState } from "react";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import "./styles.css";

export default function App() {
  const [right, setRight] = useState(false);

  const handleClone = () => {
    setRight(true);
  };

  return (
    <>
      <div className="App">
        <div className="Left">
          <LeftSide />
        </div>
        <div className="Right">{right && <RightSide />}</div>
      </div>
      <button onClick={handleClone}>Clone</button>
    </>
  );
}
