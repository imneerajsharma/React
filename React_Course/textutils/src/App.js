//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
          <>
              
            <Navbar title="TextUtils" aboutText="About TEXT"/>
            <div className="container my-3">
              <TextForm heading="Enter your text to analyse below"/>
            </div>

              
          
          </>
              

  );
}

export default App;
