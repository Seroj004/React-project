import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={s.content}>



      <ProfileInfo />


      <div>
        <MyPost posts ={ props.posts }/>
      </div>



    </div>

  );
}
export default Profile;