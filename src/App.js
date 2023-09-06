import { Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/Routes/Routes';
import Navbar from './components/Navigation/Navbar';


function App() {
  return (
    <>

      <div>


        <Navbar />
{/* 
        <Link to='home'>
          <button>
            Home
          </button>
        </Link>

        <Link to="contact">
          <button>
            Contact
          </button>
        </Link> */}

        <AppRoutes />





      </div>
    </>
  );
}

export default App;
