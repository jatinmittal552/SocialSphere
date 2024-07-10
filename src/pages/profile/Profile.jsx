import './profile.css'
import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftBar/LeftBar"
import RightBar from "../../components/rightBar/RightBar"
import TopBar from "../../components/topBar/TopBar";
const Profile = () => {
  return (
    <div>
        <TopBar/>
      <div className="profile">
        {/* <div className="profileleft"> */}
            <LeftBar/>

        {/* </div> */}
        <div className="profileright">
            <div className="profilerighttop">
                <div className="profilecover">
                    <img src="/assets/coverimg.jpg" alt="img" className="profilecoverimg" />
                    <img src="/assets/profileimg.jpg" alt="img" className="profileimg" />
                </div>
                <div className="profiledetails">
                    <h4 className="profileusername">Jatin</h4>
                    <span className='profiledescription'>Full Stack Develper</span>
                </div>
                <hr className="profilebreakline" />
            </div>
            <div className="profilerightbottom">
                
                <Feed/>
                <RightBar profile/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile