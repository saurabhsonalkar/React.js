import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h2>Counter from app: {count}</h2>
    <Navbar/>
    </>
  );
}

export default App;
