import "../../App.css";
import "materialize-css/dist/css/materialize.min.css";

const Card = ({ data }: any) => {
  return (
    <div className="col l3 m4 s12">
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator responsive-img" src={data?.links.mission_patch} alt="Patch" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-1">
            <h5 className="flow-text">{data?.mission_name}</h5>
            <i className="material-icons right">more_vert</i>
          </span>
          {data?.links.video_link ? (<p>
            <a href={data?.links.video_link} target="_blank" rel="noreferrer">
              Watch the Video
            </a>
          </p>) : (<p className="red-text text-lighten-2">
            <i className="material-icons left">error_outline</i>No Video Available
          </p>)}
          <a href={data?.links.wikipedia} target="_blank" rel="noreferrer">
            <p className="purple-text">Wikipedia</p>
          </a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <h5>{data?.mission_name}</h5>
            <i className="material-icons right">close</i>
          </span>
          <p className="flow-text">{data?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
