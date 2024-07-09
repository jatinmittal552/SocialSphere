import { Person } from "@mui/icons-material"
import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftBar/LeftBar"
import RightBar from "../../components/rightBar/RightBar"

import './home.css'
const Home = () => {
  return (
    <>
      <div className="mainContainer">
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </div>

    </>
    
  )
}

export default Home