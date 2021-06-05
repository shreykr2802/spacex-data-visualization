import "../../App.css";
const Card = ({ data }: any) => {
  return (
    <div className="col s3">
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator responsive-img" src={data?.links.mission_patch} alt="Patch" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-1 flow-text">
            {data?.mission_name}
            <i className="material-icons right">more_vert</i>
          </span>
          {data?.links.video_link ? (<p>
            <a href={data?.links.video_link} target="_blank" rel="noreferrer">
              Watch the Video
            </a>
          </p>) : (<p className="red-text text-lighten-2">
            No Video Available
          </p>)}

        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 flow-text">
            {data?.mission_name}
            <i className="material-icons right">close</i>
          </span>
          <p className="flow-text">{data?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
