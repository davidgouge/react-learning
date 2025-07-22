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
      <img src="./public/AddBrowserRouterToMain.png" className="img-fluid"></img>
      <p>In <code>App.tsx</code> define the routes with the <code>Routes</code> and <code>Route</code> components.</p>
      <img src="./public/ConfigureRoutes.png" className="img-fluid"></img>
      <h2>Route params</h2>
      <p>Route params (for example the <code>:id</code> in the image above) can be accessed within the component using the <code>useParams()</code> hook.</p>
      <img src="./public/RouteParams.png" className="img-fluid"></img>
    </>
  );
}

export default Routing;
