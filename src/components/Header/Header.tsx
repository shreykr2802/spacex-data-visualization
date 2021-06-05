import React, { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper deep-purple sticky">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                required
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <label className="label-icon">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons" onClick={() => setSearchTerm("")}>
                close
              </i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
