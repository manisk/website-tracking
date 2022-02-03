import React from "react";
import "./WebsiteList.scss";
const websiteList = (props) => {
  return (
    <div className="container">
      <h5 className="py-5">
        <b>WBSITES</b>
      </h5>

      {props.websiteDetail.map((website) => (
        <>
          <div className="website-details-container d-flex justify-content-between align-items-center">
            {website.success ? (
              <div className="title-url">
                <h2>
                  <b>{website.title}</b>
                </h2>
                <small>{website.url}</small>
              </div>
            ) : (
              <div className="title-url error-border">
                <h2>
                  <b>Sorry!This url is not exist</b>
                </h2>
                <small className="error-color">{website.url}</small>
              </div>
            )}

            {website.success ? (
              <div className="website-status">
                <small>Last checked: 5 minutes ago</small>
                <div className="btn btn-success ms-3 pe-none">LIVE</div>
              </div>
            ) : (
              <div className="website-status">
                <small>Last checked: 5 minutes ago</small>
                <div className="btn btn-error ms-3 pe-none">ERROR</div>
              </div>
            )}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};
export default websiteList;
