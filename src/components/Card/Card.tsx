import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Card = () => {
  const spaceXData = useSelector((state: RootState) => state.spaceX.data);

  return (
    <div className="col s6">
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={spaceXData[1]?.links.mission_patch} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {spaceXData[1]?.mission_name}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <a href={spaceXData[1]?.links.video_link} target="_blank">
              Watch the Video
            </a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {spaceXData[1]?.mission_name}
            <i className="material-icons right">close</i>
          </span>
          <p>{spaceXData[1]?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
