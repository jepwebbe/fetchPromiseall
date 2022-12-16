import { Link, Route, Routes } from "react-router-dom";
import AmmendFetch from "./pages/AmmendFetch";
import Fetch from "./pages/Fetch";
import { PromiseAll } from "./pages/PromiseAll";
import "./style.css";

function App() {
  return (
    <section className="mainwrapper">
      <nav>
        <ul>
          <li>
            <Link to="/fetch">Fetch</Link>
          </li>
          <li>
            <Link to="/promiseall">Promise All</Link>
          </li>
          <li>
            <Link to="/ammendfetch">Føj andet til din fetch</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home sweet home</h1>} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/promiseall" element={<PromiseAll />} />
        <Route path="/ammendfetch" element={<AmmendFetch />} />
        <Route path="*" element={<h1>Det du leder efter skal du lede længe efter</h1>} />
      </Routes>
    </section>
  );
}

export default App;
