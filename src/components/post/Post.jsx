import { MoreVert } from '@mui/icons-material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="/assets/ironman.jpg" alt="img" className="postprofileimage" />
                    <span>
                    <div className='postusername'>Jatin</div>
                    <div className='posttime'>5 min ago</div>
                    </span>
                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <div className="posttext">hey, it is my image</div>
                <img src="/assets/ironman.jpg" alt="img" className="postimage" />
            </div>
            <div className="postbottom">
                <div className="postdetails">
                    <ThumbUpIcon htmlColor='blue' className='postlike'/>
                    <span className="postlikecount">5</span>
                </div>
                <div className="postdetails">
                    <span className="postcommentcount">5</span>
                    <CommentIcon htmlColor='grey' className='postcomment'/>
                </div>
            </div>
            <hr className="postbreakline" />
            <div className="postfooter">
                <div className="postmanipulation">
                    <ThumbUpOffAltIcon/>
                    <span className='postdatamanipulation'>
                        Like
                    </span>
                </div>
                <hr className="postdatabreakline" />
                <div className="postmanipulation">
                    <ChatBubbleOutlineIcon/>
                    <span className='postdatamanipulation'>
                        Comment
                    </span>
                </div>
                <hr className="postdatabreakline" />
                <div className="postmanipulation">
                    <ShareIcon/>
                    <span className='postdatamanipulation'>
                        Comment
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Post