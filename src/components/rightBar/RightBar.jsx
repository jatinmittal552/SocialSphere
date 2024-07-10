import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import Friend from '../friends/Friend'
import { Users } from '../../dummydata'
const RightBar = ({profile}) => {
  
  const HomeRightBar=()=>{
    return(
      <>
      <div className="homerightbar">
        <div className="birthdaycontainer">
            <div className="birthdaytitle">Birthday</div>
            <div className="birthdaycontent">
              <img src="/assets/gift.png" alt="gift" className="birthdaygift" />
              <span className='birthdaytext'>
                <b>Jatin</b> and <b>3 other friends</b> had birthday last week
              </span>
            </div>
          </div>
          <hr className="rightbreakline" />
          <div className="rightsponspor">
          <div className="sponsportitle">Sponspored</div>
            <img className="sponspor" src="assets/ads.jpg" alt="image"/>
            <img className="sponspor" src="assets/ads2.jpg" alt="image"/>
          </div>
          <hr className="rightbreakline" />

            <div className="friendtitle">
              Active Friends
            </div>
          <ul className="rightfrienditems">

            {Users.map((user)=>(
              <Online key={user.id} user={user} />
  ))}
          </ul>
          </div>

      </>
    )
  } 

  const ProfileRightBar=()=>{
    return(
      <>
        <h4 className='profilerightbartitle'>User Information</h4>
        <div className="profileuserinfo">
          <div className="profileuserinfoitem">
            <span className="profileuserinfoitemkey">City :</span>
            <span className="profileuserinfoitemvalue">Delhi</span>
          </div>
          <div className="profileuserinfoitem">
            <span className="profileuserinfoitemkey">City :</span>
            <span className="profileuserinfoitemvalue">Delhi</span>
          </div>
          <div className="profileuserinfoitem">
            <span className="profileuserinfoitemkey">City :</span>
            <span className="profileuserinfoitemvalue">Delhi</span>
          </div>
          <div className="profileuserinfoitem">
            <span className="profileuserinfoitemkey">City :</span>
            <span className="profileuserinfoitemvalue">Delhi</span>
          </div>
        </div>
        <hr className="profilerightbreakline" />
        <h4 className='profilerightbartitle'>User Friends</h4>
        <div>
          {Users.map((user)=>(
            <Friend key={user.id} user={user}/>
          ))}
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
        <div className="rightwrapper">
          {(profile?<ProfileRightBar/>:<HomeRightBar/>)}
          
        </div>
    </div>
  )
}

export default RightBar