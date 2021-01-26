import { Collapse, Checkbox } from "antd";
const Index = ({ movies }) => {
  
  const { Panel } = Collapse;
  return (
    <div>
      {movies.length ? (
        <>
          <Collapse>
            {movies.map((movie, index) => {
              return (
                <Panel header={movie.title} key={index}>
                  <div className="collapsible_component_record">
                    {/* checkbox */}
                    <div className="checkbox_container">
                      <Checkbox
                      // onChange={onChange}
                      >
                        Watched
                      </Checkbox>
                    </div>
                    {/* record */}
                    <div className="collapse_box">
                      {/* left side */}
                      <div className="left_side">
                        <div
                          style={{
                            backgroundImage: `url(https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081)`,
                            backgroundSize: "contain",
                            height: "60px",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </div>
                      {/* right side */}
                      <div className="right_side">
                        <h4>Year:2005</h4>
                        <h4>Runtime: 137m</h4>
                        <h4>IMDB Score: 6.9</h4>
                      </div>
                    </div>
                  </div>
                </Panel>
              );
            })}
          </Collapse>
        </>
      ) : (
        <p>Please search and add movies in your list</p>
      )}
    </div>
  );
};
export default Index;
