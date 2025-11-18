import Profile from "../../pages/profile/Profile";
import "./topbar.css";
import { Search,Person,Chat,Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom"
const TopBar = () => {

  return (
    <div>
      <div className="topbar-parent">
      <div className="topbar">
        <div className="left">
        <Link to="/" style={{textDecoration:'none'}}>
          <span className="company">SocialSphere</span>
        </Link>
        </div>
        <div className="centre">
          <div className="search">
          <Search className="searchicon" />
          <input className="searchinput" placeholder="Search for friends" />
          </div>
        </div>
        <div className="right">
          <div className="links">
            <span className="linkitem">Home</span>
            <span className="linkitem">Timeline</span>
          </div>
          <div className="icons">
            <div className="iconitem">
                <Person/>
              <span className="iconbadge">1</span>
            </div>
            <div className="iconitem">
                <Chat/>
              <span className="iconbadge">2</span>
            </div>
            <div className="iconitem">
                <Notifications/>
              <span className="iconbadge">3</span>
            </div>
          </div>
        </div>
        <img src="/assets/ironman.jpg" alt="profile" className="profileimage" />
      </div>
      </div>
    </div>
  );
};

export default TopBar;
