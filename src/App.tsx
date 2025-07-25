import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Routing from "./pages/Routing";
import RoutingWithUrlParam from "./pages/RoutingWithUrlParam";
import { Components } from "./pages/Components";

function App() {
  return (
    <>
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routing" element={<Routing />} />
          <Route path="/routing/:id" element={<RoutingWithUrlParam />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
