import "./App.css";
import Loginform from "./components/Loginform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import { localData } from "./utils/api";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={localData ? <Welcome /> : <Loginform />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
