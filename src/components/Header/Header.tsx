import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/slices/searchSlice";
import { RootState } from "../../store/store";
import "materialize-css/dist/css/materialize.min.css";
import SideNavButton from "../SideNav/SideNavButton";
const M = require("materialize-css/dist/js/materialize.min.js");

const filterInfo: any = {
  lastweek: 'Launched Last Week',
  lastmonth: 'Launched Last Month',
  lastyear: 'Launched Last Year',
  failure: 'Failed to Launched',
  success: 'Launched Successfully',
  yes: 'Upcoming',
  no: 'Completed'
}

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const filterBy = useSelector((state: RootState) => state.search.filterBy);

  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    // eslint-disable-next-line
    var instance = M.Sidenav.init(elem, {
      edge: "right",
      inDuration: 250
    });
  }, []);

  return (
    <div className="navbar-fixed row">
      <nav className="nav-wrapper deep-purple">
        <div className="input-field col s9">
          <input
            id="search"
            type="search"
            required
            value={searchTerm}
            onChange={(event) => dispatch(setSearchTerm(event.target.value))}
            placeholder="Search by Rocket Name"
          />
          <label className="label-icon">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons" onClick={() => dispatch(setSearchTerm(""))}>
            close
              </i>

        </div>
        <div className="col s2">
          <span className="filerInfo">{filterInfo[filterBy]}</span>
        </div>
        <div className="col s1">
          <SideNavButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
