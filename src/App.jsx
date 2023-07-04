import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <h2>React Routers</h2>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/comment">Comment</a>
          </li>
        </ul>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="comment" element={<Comment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
