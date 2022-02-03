import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="container-fluid p-0">
      <div className="header">
        <div className="container header-container d-flex justify-content-between align-items-center ">
          <h5 className="m-0">
            <b>LIVE WEBSITE TRACKING</b>
          </h5>
          <p className="m-0">Currently tracking {props.length} website</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
