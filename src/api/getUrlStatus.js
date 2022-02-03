const getUrlStatus = async (obj) => {
  const url1 = "https://cors-anywhere.herokuapp.com/";
  const url2 = obj.url;
  const url = url1 + url2;
  //alert(url);
  const response = await fetch(url);
  const data = await response.text();

  console.log("success", response);
  if (!response.ok) {
    throw data;
  }
  return data;
};
export default getUrlStatus;
