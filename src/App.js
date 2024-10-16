import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Explore from './pages/Explore';
import Notification from './pages/Notification';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import './style/main.css';
import './App.css';
import Sidebar from './component/Sidebar';

function App() {

  const location = useLocation();

  const noShowSidebar = [
    '/home',
    '/explore',
    '/notification',
    '/messages',
    '/lists',
    '/profile',
    '/bookmarks'
  ];

  return (

    <div>

     {!noShowSidebar.includes(location.pathname) && <Sidebar />}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element= {<Explore />} />
          <Route path="/notification" element= {<Notification />} />
          <Route path="/messages" element= {<Messages />} />
          <Route path="/lists" element= {<Lists />} />
          <Route path="/profile" element= {<Profile />} />
          <Route path="/bookmarks" element= {<Bookmarks />} />

     
        </Routes>

    </div>
  );
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

