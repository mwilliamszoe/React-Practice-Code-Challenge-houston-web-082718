import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiList
          .slice(props.currentSushiIdx, props.currentSushiIdx + 4)
          .map((sushi, idx) => {
            return (
              <Sushi
                sushi={sushi}
                key={sushi.id}
                eatSushi={sushiObj => props.eatSushi(sushiObj)}
                eatenSushi={props.eatenSushi}
              />
            );
          })}
        <MoreButton addMoreSushi={props.addMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
