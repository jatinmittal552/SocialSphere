
import './friend.css'
const Friend = ({id,user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
        <div className="followinglist">
            <div className="following">
            <img src={PF+user.profilePicture} alt="" className="followingimg" />
            <span className='followingusername'>{user.username}</span>
            </div>
        </div>
    </>
  )
}

export default Friend

