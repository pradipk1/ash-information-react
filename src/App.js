
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
