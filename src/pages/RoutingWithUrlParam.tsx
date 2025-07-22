import { useParams } from "react-router-dom";

function RoutingWithUrlParam() {
  let { id } = useParams();
  return <h1>The Id passed in the route is {id}</h1>;
}

export default RoutingWithUrlParam;
