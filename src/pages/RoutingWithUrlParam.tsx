import { Link, useParams } from "react-router-dom";

function RoutingWithUrlParam() {
  let { id } = useParams();
  return (
    <>
      <h1>The Id passed in the route is {id}</h1>
      <p> 
        <Link to="/routing" className="btn btn-primary">Back to /routing</Link>
      </p>
    </>
  );
}

export default RoutingWithUrlParam;
