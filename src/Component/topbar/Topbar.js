import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">ADMIN PANEL</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topRight">
                <div className="topbarIconContainer">
                  <Settings /></div>
                  <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="" className="topAvatar" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Topbar;
