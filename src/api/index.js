import queryString from "query-string";
import axios from "axios";

export function getPhotos({ search, page = 1 } = {}) {
  let objectQuery = {
    term: search,
    page: page,
    rpp: 20,
    image_size: 440,
    sort: "highest_rating",
    consumer_key: "sPvXEpW2sFrch65rpyZQf01lBHuRGkEDDROTG1r4"
  };
  const urlQuery = queryString.stringify(objectQuery);
  const apiUrl = `https://api.500px.com/v1/photos/search?${urlQuery}`;
  return axios.get(apiUrl);
}

export default {
	getPhotos
}