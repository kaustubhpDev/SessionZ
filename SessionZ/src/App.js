import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sectiontop from "./Components/Sectiontop/Sectiontop";
import Sectionmid from "./Components/Sectionmid/Sectionmid";
import Sectionfeatures from "./Components/Sectionfeatures/Sectionfeatures";
import Sectionfooter from "./Components/Sectionfooter/Sectionfooter";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    /*<div className="app-container">
      <Navbar className="app-items" />
      <Sectiontop className="app-items" />
      <Sectionmid className="app-items" />
      <Sectionfeatures className="app-items" />
      <Sectionfooter className="app-items" />
      <Login />

    </div>*/
    <div className="fill-window">
      <Signup />
    </div>
  );
}

export default App;
