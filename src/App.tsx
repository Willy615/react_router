import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>React切換分頁</h2>
      </main>
      <nav>
        <Link to="/sheet1">Go to Sheet 1</Link>
        <br></br>
        <Link to="/sheet2">Go to Sheet 2</Link>
      </nav>
    </>
  );
}

function Sheet1() {
  return (
    <>
      <main>
        <h3>分頁1 !!</h3>
      </main>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </>
  );
}

function Sheet2() {
  return (
    <>
      <main>
        <h3>分頁2 !!</h3>
      </main>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React Router Homework - 遊戲開發組Willy</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sheet1" element={<Sheet1 />} />
        <Route path="sheet2" element={<Sheet2 />} />
      </Routes>
    </div>
  );
}

export default App;
