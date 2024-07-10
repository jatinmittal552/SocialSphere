
import './friend.css'
const Friend = ({id,user}) => {
  return (
    <>
        <div className="followinglist">
            <div className="following">
            <img src={user.profilePicture} alt="" className="followingimg" />
            <span className='followingusername'>{user.username}</span>
            </div>
        </div>
    </>
  )
}

export default Friend

