import Home from './views/Home';
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = {process.env.PUBLIC_URL + '/'} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
