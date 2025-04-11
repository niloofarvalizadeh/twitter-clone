import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Rightmenu from "./RightMenu/Rightmenu";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-body">
      <div className="home-sidebar">
        <Sidebar />
      </div>
      <div className="home-feed">
        <Feed />
      </div>
      <div className="home-right-menu">
        <Rightmenu />
      </div>
    </div>
  );
}
