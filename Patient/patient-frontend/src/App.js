
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddPatient from './patients/AddPatient';
import Query from './pages/Query';
import EditPatient from './patients/EditPatient';
import ViewPatient from './patients/ViewPatient';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/addPatient" element={<AddPatient />} />
          <Route exact path="/editPatient/:id" element={<EditPatient />} />
          <Route exact path="/viewPatient/:id" element={<ViewPatient />} />
        </Routes>

      </Router>

      {/* <Query/> */}
    </div>
  );
}

export default App;
