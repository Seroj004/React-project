import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return (
     <div className = {s.ProfileInfo}>
            
        <div className = {s.imgProf}>
           <img src='https://i.imgur.com/RRUe0Mo.png' />
        </div>

              <div className={s.postsBlock}>
        
                ava+deskription
                Main content
            
              </div>
     </div>

    );
}

export default ProfileInfo;