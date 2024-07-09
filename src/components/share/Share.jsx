import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import MoodIcon from '@mui/icons-material/Mood';
import './share.css'
const share = () => {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="/assets/ironman.jpg" alt="image" className="shareuserimage" />
                <input placeholder='Write....' className="shareinput" />
            </div>
            <hr className="sharebreakline" />
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="option">
                        <VideoChatIcon htmlColor='red' className='optionicon'/>
                        <span className='optiontext'>
                            Video Chat
                        </span>
                    </div>
                    <div className="option">
                        <PermMediaIcon htmlColor='green' className='optionicon'/>
                        <span className='optiontext'>
                            Photo/Video
                        </span>
                    </div>
                    <div className="option">
                        <MoodIcon htmlColor='yellow' className='optionicon'/>
                        <span className='optiontext'>
                            Feeling/Activity
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default share