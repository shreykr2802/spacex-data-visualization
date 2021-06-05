import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchDataStart } from "./store/slices/spaceXSlice";
import Header from "./components/Header/Header";
import Contents from "./containers/Contents/Contents";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Contents />
    </div>
  );
}

export default App;
