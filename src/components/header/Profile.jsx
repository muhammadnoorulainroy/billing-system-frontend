import React from 'react'
import './Profile.css'
import Pic from '../../assets/images/Pic.png'

const Profile = () => {
  return (
    <div className='flex-container'>
      <div className='flex-left'>
        <img
          className='image-size rounded-circle'
          src={Pic}
          alt='profile pic'
        />
      </div>
      <div className='flex-right'>
        <div className='text-bold white'>Muhammad Noorulain Roy</div>
        <div className='text-small white'>User</div>
      </div>
    </div>
  )
}

export default Profile
