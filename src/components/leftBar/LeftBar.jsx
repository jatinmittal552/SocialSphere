import React from 'react'
import './leftbar.css'
import PeopleIcon from '@mui/icons-material/People';
import RestoreIcon from '@mui/icons-material/Restore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SendIcon from '@mui/icons-material/Send';
import LayersIcon from '@mui/icons-material/Layers';
const LeftBar = () => {
  return (
    <div className='leftbar'>
        <div className="leftwrapper">
            <ul className="listitems">
                <li className="item">
                    <PeopleIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">Friends</span>
                </li>
                <li className="item">
                    <RssFeedIcon htmlColor='red' className='itemicon'/>
                    <span className="itemtext">Feeds</span>
                </li>
                <li className="item">
                    <SendIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">Messenger</span>
                </li>
                <li className="item">
                    <RestoreIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">Memories</span>
                </li>
                <li className="item">
                    <BookmarkIcon htmlColor='purple' className='itemicon'/>
                    <span className="itemtext">Saved</span>
                </li>
                <li className="item">
                    <GroupsIcon htmlColor='green' className='itemicon'/>
                    <span className="itemtext">Groups</span>
                </li>
                <li className="item">
                    <StorefrontIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">MarketPlace</span>
                </li>
                <li className="item">
                    <LayersIcon htmlColor='orange' className='itemicon'/>
                    <span className="itemtext">Pages</span>
                </li>
            </ul>
            <button className='showmore'>Show More</button>
            <hr className="breakline" />
            <div className="lefttitle">Your Shortcut</div>
            <ul className="listitems">
                <li className="item">
                    <PeopleIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">Friends</span>
                </li>
                <li className="item">
                    <RssFeedIcon htmlColor='red' className='itemicon'/>
                    <span className="itemtext">Feeds</span>
                </li>
                <li className="item">
                    <SendIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">Messenger</span>
                </li>
                <li className="item">
                    <RestoreIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">Memories</span>
                </li>
                <li className="item">
                    <BookmarkIcon htmlColor='purple' className='itemicon'/>
                    <span className="itemtext">Saved</span>
                </li>
                <li className="item">
                    <GroupsIcon htmlColor='green' className='itemicon'/>
                    <span className="itemtext">Groups</span>
                </li>
                <li className="item">
                    <StorefrontIcon htmlColor='skyblue' className='itemicon'/>
                    <span className="itemtext">MarketPlace</span>
                </li>
                <li className="item">
                    <LayersIcon htmlColor='orange' className='itemicon'/>
                    <span className="itemtext">Pages</span>
                </li>
            </ul>
    
        </div>
    </div>
  )
}

export default LeftBar