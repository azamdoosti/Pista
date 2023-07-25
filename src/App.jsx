import { Routes, Route, BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Home from "./Home";
import Comment from "./Comment";
import About from "./About";
import Contact from "./Contact";
import FirstProjectTest from "./FirstPistaProject/FirstProjectTest ";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <h2>React Routers</h2>
        </div>
        <ul>
          <li>
            <a exact href="/">
              Home
            </a>
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
          <li>
            <a href="/FirstProjectTest">FirstProjectTest</a>
          </li>
        </ul>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="comment" element={<Comment />} />
            <Route path="FirstProjectTest" element={<FirstProjectTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
