import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});
export default instance;
