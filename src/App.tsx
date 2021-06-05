import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchDataStart } from "./store/slices/spaceXSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataStart());
  }, [dispatch]);

  return <div className="App">Hello</div>;
}

export default App;
