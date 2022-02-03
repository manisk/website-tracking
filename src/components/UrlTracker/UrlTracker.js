import React, { useState } from "react";
import "./UrlTracker.scss";
import getUrlStatus from "../../api/getUrlStatus";
const UrlTracker = (props) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const checkUrl = async () => {
    if (url.trim() === "") {
      alert("Please!Enter url");
      return;
    }
    try {
      setLoading(true);
      const response = await getUrlStatus({ url: url });
      // console.log(response.match(/<title.*?>(.*)<\/title>/)[0]);
      const title = response.match(/<title.*?>(.*)<\/title>/)[1];
      console.log(title);
      props.addWebsite({ title: title, url: url, success: true });
      setUrl("");
      //console.log(response);
    } catch (error) {
      console.log("error", error);
      props.addWebsite({ title: null, url: url, success: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container url-container">
      <div className="row my-4 ">
        <div className="col-sm-10 mt-3">
          <input
            type="text"
            value={url}
            className="form-control"
            placeholder="Input with url validation"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <button
            disabled={loading}
            type="button"
            class="btn btn-dark-bule btn-lg mt-3"
            onClick={checkUrl}
          >
            {loading ? "Loading..." : "ADD WEBSITE"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default UrlTracker;
