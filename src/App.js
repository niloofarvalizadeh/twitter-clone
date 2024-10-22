import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/Home';
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
import { useState } from 'react';
import Tweet from './component/Tweet';
import Tweetbox from './component/Tweetbox';
import TweetActions from './component/TweetActions';
import SearchBar from './component/SearchBar';


// function App() {

//   const location = useLocation();

//   const noShowSidebar = [
//     '/home',
//     '/explore',
//     '/notification',
//     '/messages',
//     '/lists',
//     '/profile',
//     '/bookmarks'
//   ];

//   return (

//     <div>

//      {!noShowSidebar.includes(location.pathname) && <Sidebar />}
 
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/explore" element= {<Explore />} />
//           <Route path="/notification" element= {<Notification />} />
//           <Route path="/messages" element= {<Messages />} />
//           <Route path="/lists" element= {<Lists />} />
//           <Route path="/profile" element= {<Profile />} />
//           <Route path="/bookmarks" element= {<Bookmarks />} />
//         </Routes>
//         <Feed />

//     </div>
//   );
// }
// function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default AppWrapper;

function App() {

  const [currentComponent, setCurrentComponent] = useState('SearchBar'); 
  return (
    <div>
      {currentComponent === 'Feed' && <Feed />}
      {currentComponent === 'Sidebar' && <Sidebar />}
      {currentComponent === 'Home' && <Home />}
      {currentComponent === 'Explore' && <Explore />}
      {currentComponent === 'Notification' && <Notification />}
      {currentComponent === 'Messages' && <Messages />}
      {currentComponent === 'Bookmarks' && <Bookmarks />}
      {currentComponent === 'Lists' && <Lists />}
      {/* {currentComponent === 'Profile' && <Profile />} */}
      {currentComponent === 'Tweetbox' && <Tweetbox />}
      {currentComponent === 'UserProfile' && <UserProfile />}
      {currentComponent === 'Tweet' && <Tweet />}
      {currentComponent === 'TweetActions' && <TweetActions />}
      {currentComponent === 'SearchBar' && <SearchBar />}



    
      
    </div>
  );
}

export default App;