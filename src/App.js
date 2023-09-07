import './App.css';
import AppRoutes from './components/Routes/Routes';
import Navbar from './components/Navigation/Navbar';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
