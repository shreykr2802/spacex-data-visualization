import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchDataStart } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataStart());
  }, []);

  return <div className="App">Hello</div>;
}

export default App;
