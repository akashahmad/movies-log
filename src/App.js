import { useEffect, useState } from "react";
import Collapse from "./components/collapse";
import { Input, AutoComplete } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import axios, { CancelToken } from "axios";
import SearchHandler from "./components/serchHandler";
let cancel;
const Index = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [unwatched, setUnwatched] = useState([]);

  // Handler for fetching movies
  const apiSearchHandler = (value) => {
    if (!!value) {
      cancel && cancel();
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=f533c4ffc23aaaa41db151dc7ee3d8ca&query=" + value, {
          cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
        })
        .then((res) => {
          setSearchResult(res.data.results);
        });
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className="container">
      <SearchHandler changeHandler={apiSearchHandler} searchResult={searchResult} setUnwatched={setUnwatched} unwatched={unwatched} setSearchResult={setSearchResult}/>
      <div className="nav">
        <div className="eye-buttons">
          <div className="nav-item" style={{ borderBottom: "2px solid #40a9ff" }}>
            <EyeInvisibleOutlined style={{ fontSize: "20px", color: "#40a9ff" }} />
            <p>Unwatched</p>
          </div>
          <div className="nav-item">
            <EyeOutlined style={{ fontSize: "20px", color: "#40a9ff" }} />
            <p>Watched</p>
          </div>
        </div>
        <div>
          <Input placeholder="Search My Movies" />
        </div>
      </div>
      <Collapse movies={unwatched} />
    </div>
  );
};

export default Index;
