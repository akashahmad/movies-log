import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import OutsideClick from "@alphasquad/outside-click";

export default ({ changeHandler, searchResult, setUnwatched, unwatched, setSearchResult }) => {
  const additionHandler = (movie) => {
    let _copy = [...unwatched];
    let already = _copy.find((sin) => sin.id === movie.id);
    if (!already) {
      _copy.push(movie);
      setUnwatched(_copy);
    }
    setSearchResult([]);
  };
  const closeMethod = () => {
    setSearchResult([]);
  };
  return (
    <div className="search_component">
      {/* input */}
      <div className="search_input">
        <Input size="large" placeholder="Search" prefix={<SearchOutlined />} onChange={(e) => changeHandler(e.target.value)} />
      </div>
      <OutsideClick onClose={closeMethod}>
        {searchResult &&
          searchResult.map((movie, index) => {
            return (
              <div className="search_box" key={index} onClick={() => additionHandler(movie)}>
                {/* left side */}
                <div className="left_side">
                  <div
                    style={{
                      backgroundImage: `url( ${
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : "https://cdn.cinematerial.com/p/297x/rlhwo8t9/dummy-dutch-movie-poster-md.jpg?v=1456307982"
                      })`,
                      backgroundSize: "cover",
                      height: "50px",
                      width: "50px",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
                {/* right side */}
                <div className="right_side">
                  <h3>{movie.title && movie.title.length > 50 ? movie.title.substring(0, 30).concat("...") : movie.title}</h3>
                  {movie.release_date && <h4>Year : {movie.release_date.split("-")[0]}</h4>}
                </div>
              </div>
            );
          })}
      </OutsideClick>
      {/* Boxes */}
    </div>
  );
};
