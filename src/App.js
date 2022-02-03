import Header from "./components/Header/Header";
import UrlTracker from "./components/UrlTracker/UrlTracker";
import WebsiteList from "./components/WebsiteList/WebsiteList";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [websiteDetail, setWebsiteDetails] = useState([]);
  useEffect(() => {
    const getDetails = localStorage.getItem("details");
    if (getDetails) {
      const initialState = JSON.parse(getDetails);
      setWebsiteDetails(initialState);
    }
  }, []);
  // addWebsite({title:})
  const addWebsite = (website) => {
    const detl = [...websiteDetail, website];
    setWebsiteDetails(detl);

    localStorage.setItem("details", JSON.stringify(detl));
  };

  return (
    <div className="App">
      <Header length={websiteDetail.length} />
      <UrlTracker addWebsite={addWebsite} />
      <WebsiteList websiteDetail={websiteDetail} />
    </div>
  );
}

export default App;
