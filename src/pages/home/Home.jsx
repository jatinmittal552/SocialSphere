import { Person } from "@mui/icons-material"
import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftBar/LeftBar"
import RightBar from "../../components/rightBar/RightBar"
import TopBar from "../../components/topBar/TopBar";

import './home.css'
const Home = () => {
  return (
    <>
      <TopBar/>
      <div className="mainContainer">
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </div>

    </>
    
  )
}

export default Home