import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Signin from './component/Signin';
import Header from './component/Header';
import Explore from './pages/Explore';
import Notification from './pages/Notification';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import UserProfile from './component/Profile/UserProfile';
import './style/main.css';
import './App.css';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import { useState, useEffect } from 'react';
import Tweet from './component/Tweet';
import Tweetbox from './component/Tweetbox';
import SearchBar from './component/SearchBar';
import News from './component/News';
import WhoToFollow from './component/WhoToFollow';
import { cleanup } from '@testing-library/react';
import Splash from './component/Splash';
import Home from './component/Home';
import PostBtn from './component/Post-btn';





function App() {
   
  // useState is true to show the Splash screen to the user at the beginning

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect( () => {
  
    const timer = setTimeout ( () => {

      setIsSplashVisible(false);

    }, 3000  );

    return () => cleanup(timer);

  }, []);


  return (

    <Router>
      <div>

        {isSplashVisible ? ( <Splash /> ) : ( 
          <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
      )}
      </div>
    </Router>
  );
        }


export default App;