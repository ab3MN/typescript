import axios from "axios";
import { Dispatch } from "redux";
import * as na from "./newsActions";

export const fetchNews =
  (q: string = "Ukraine") =>
  (d: Dispatch) => {
    d(na.fetchNewsStart());

    const options: any = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q, lang: "en", page: "1", page_size: "25" },
      headers: {
        "x-rapidapi-key": "5d08f90e15mshe811fc7662e62fcp1f5b09jsn5e6e41406614",
      },
    };

    axios
      .request(options)
      .then((res) => {
        d(na.fetchNewsSuccess(res?.data.articles));
      })
      .catch((error) => d(na.fetchNewsError(error.message)));
  };
