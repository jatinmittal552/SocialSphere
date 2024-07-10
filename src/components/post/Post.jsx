import { MoreVert } from '@mui/icons-material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import './post.css'
import { Users } from '../../dummydata';
import { useState } from 'react';
const Post = ({id,post}) => {
    
    const [like, setlike] = useState(post.like)
    const [islike, setislike] = useState(false)

    const likehandler=()=>{
        setlike(islike ? like-1 : like+1)
        setislike(!islike)
    }

    return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={Users.filter((u)=>u.id===post?.id)[0].profilePicture} alt="img" className="postprofileimage" />
                    <span>
                    <div className='postusername'>{Users.filter((u)=>u.id===post?.id)[0].username}</div>
                    <div className='posttime'>{post.date}</div>
                    </span>
                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <div className="posttext">{post?.desc}</div>
                <img src={post.photo} alt="img" className="postimage" />
            </div>
            <div className="postbottom">
                <div className="postdetails">
                    <ThumbUpIcon htmlColor='blue' className='postlike'/>
                    <span className="postlikecount">{like} likes</span>
                </div>
                <div className="postdetails">
                    <span className="postcommentcount">{post.comment} comments</span>
                    <CommentIcon htmlColor='grey' className='postcomment'/>
                </div>
            </div>
            <hr className="postbreakline" />
            <div className="postfooter">
                <div className="postmanipulation" onClick={likehandler}>
                    <ThumbUpOffAltIcon/>
                    <span className='postdatamanipulation'>
                        Like 
                    </span>
                </div>
                <hr className="postdatabreakline" />
                <div className="postmanipulation" >
                    <ChatBubbleOutlineIcon/>
                    <span className='postdatamanipulation'>
                        Comment
                    </span>
                </div>
                <hr className="postdatabreakline" />
                <div className="postmanipulation">
                    <ShareIcon/>
                    <span className='postdatamanipulation'>
                        Share
                    </span>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Post