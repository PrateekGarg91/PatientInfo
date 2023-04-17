
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddPatient from './patients/AddPatient';
import Query from './pages/Query';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path = "/" element={<Homepage/>}/>
        <Route exact path = "/addPatient" element={<AddPatient/>}/>
      </Routes>

      </Router>
      
       {/* <Query/> */}
    </div>
  );
}

export default App;
