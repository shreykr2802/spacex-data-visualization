import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/slices/searchSlice";
import { RootState } from "../../store/store";

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper deep-purple">
          <div className="input-field">
            <input
              id="search"
              type="search"
              required
              value={searchTerm}
              onChange={(event) => dispatch(setSearchTerm(event.target.value))}
            />
            <label className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={() => dispatch(setSearchTerm(""))}>
              close
              </i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
