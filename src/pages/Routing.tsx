import { Link } from "react-router-dom";
import AddBrowserRouterToMain from "../images/AddBrowserRouterToMain.png";
import ConfigureRoutes from "../images/ConfigureRoutes.png";
import RouteParams from "../images/RouteParams.png";

function Routing() {
  return (
    <>
      <h1>Routing</h1>
      <h2>Setup</h2>
      <p>
        Install <code>react-router-dom</code> and then add{" "}
        <code>import {"{ BrowserRouter }"} from "react-router-dom";</code>
        to <code>main.tsx</code>.
      </p>
      <p>
        Then wrap the main App in <code>BrowserRouter</code>
      </p>
      <img src={AddBrowserRouterToMain} className="img-fluid"></img>
      <p>
        In <code>App.tsx</code> define the routes with the <code>Routes</code>{" "}
        and <code>Route</code> components.
      </p>
      <img src={ConfigureRoutes} className="img-fluid"></img>
      <h2>Route params</h2>
      <p>
        Route params (for example the <code>:id</code> in the image above) can
        be accessed within the component using the <code>useParams()</code>{" "}
        hook.
      </p>
      <img src={RouteParams} className="img-fluid"></img>
      <p>
        <Link to="/routing/42">Click here to go to the route `/routing/42`</Link>
      </p>
    </>
  );
}

export default Routing;
