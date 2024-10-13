import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import './style/main.css';
import './App.css';

function App() {
  return (
    <div>
   <Header/>
   </div>
      // <Router>
      //   <Routes>
      //     <Route path= "/" element= {<Home />} />
      //   </Routes>

      // </Router>

  );
}

export default App;
