import React from 'react'
import './rightbar.css'
const RightBar = () => {
  return (
    <div className='rightbar'>
        <div className="rightwrapper">
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

          <div className="rightfrienditems">
            <div className="friendtitle">
              Active Friends
            </div>
            <ul className='onlinefriends'>

            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className='activesymbol'></span>
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className='activesymbol'></span>

                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className='activesymbol'></span>

                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className='activesymbol'></span>

                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            <li className="friendcontainer">
                <img src="assets/ironman.jpg" alt="img" className="friendprofileimg" />
                <span className="friendusername">Jatin</span>
            </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default RightBar