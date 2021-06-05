import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchDataStart } from "./store/slices/spaceXSlice";
import { RootState } from "./store/store";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  const dispatch = useDispatch();
  const spaceXData = useSelector((state: RootState) => state.spaceX.data);

  useEffect(() => {
    dispatch(fetchDataStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Card />
    </div>
  );
}

export default App;
