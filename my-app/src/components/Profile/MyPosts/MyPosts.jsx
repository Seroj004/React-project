import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPost = (props) => {
    
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    return (
        <div className={s.MyPost}>

            <div>
                <div className={s.textarea}>

                    <h3>My Posts</h3>
                    <textarea></textarea>

                </div>

                <div className={s.pressmebutton}>

                    <button>press me</button>

                </div>

            </div>

            <div className={s.Post}>

                {postsElement}

            </div>
        </div>

    );
}
export default MyPost;