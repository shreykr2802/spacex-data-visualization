import "../../App.css";
import "materialize-css/dist/css/materialize.min.css";

const Card = ({ data }: any) => {
  return (
    <div className="col l3 m4 s12">
      <div className="card z-depth-5">
        {data?.links.mission_patch && <div className="card-image waves-effect waves-block waves-light right">
          <img className="activator responsive-img" src={data?.links.mission_patch} alt="Patch" />
        </div>}
        <div className="card-content">
          <span className="flow-text">Flight No: <strong>{data.flight_number}</strong></span>
          <span className="card-title activator grey-text text-darken-1">
            <h5 className="flow-text">{data?.mission_name}</h5>
            <i className="material-icons right">more_vert</i>
          </span>
          <div>
            <span><h5 className="flow-text">Rocket Name: <strong>{data.rocket.rocket_name}</strong></h5></span>
            <span><h5 className="flow-text">Rocket Type: <strong>{data.rocket.rocket_type}</strong></h5></span>
          </div>
          <div>
            <span>{data.upcoming ? <h5 className="flow-text orange-text status">Upcoming</h5> : (data.launch_success) ? <h5 className="flow-text green-text status">Launched Successfully</h5> : <h5 className="flow-text red-text status">Launch Failed</h5>}</span>
            <span>{data.upcoming ? <h5 className="flow-text orange-text status">Upcoming</h5> : data.rocket.first_stage.cores[0].landing_intent && (data.rocket.first_stage.cores[0].land_success) ? <h5 className="flow-text green-text status">Landed Successfully</h5> : <h5 className="flow-text red-text status">Landing Failed</h5>}</span>
          </div>
          {data?.links.video_link ? (<p>
            <a href={data?.links.video_link} target="_blank" rel="noreferrer">
              Watch the Video
            </a>
          </p>) : (<p className="red-text text-lighten-2">
            <i className="material-icons left tiny">error_outline</i>No Video Available
          </p>)}
          {data?.links.wikipedia ? (<p>
            <a href={data?.links.wikipedia} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </p>) : (<p className="red-text text-lighten-2">
            <i className="material-icons left tiny">error_outline</i>No Wikipedia Link
          </p>)}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <h5>{data?.mission_name}</h5>
            <i className="material-icons right">close</i>
          </span>
          <p className="flow-text">{data?.details}</p>
          <div>
            <span className="flow-text status brown-text"><h5>Payload</h5></span>
            {data.rocket.second_stage.payloads.map((payload: any) => {
              return (
                <div key={payload.payload_id}>
                  <span>
                    <h5 className="flow-text status">ID: <span className="light-blue-text accent-1">{payload.payload_id}</span></h5>
                    <h5 className="flow-text status">Type: <span className="light-blue-text accent-1">{payload.payload_type}</span></h5>
                    <h5 className="flow-text status">Customer: <span className="light-blue-text accent-1">{payload.customers.map((customer: any, index: number) => index ? ", " + customer : customer)}</span></h5>
                  </span>
                  <div className="divider" />
                </div>)
            })}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;
