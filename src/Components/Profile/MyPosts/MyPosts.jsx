import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator} from './../../../state/profileReducer';

const MyPosts =(props)=>{
    let postsElement=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost=()=>{
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
        newPostElement.current.value='';
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
            <textarea ref={newPostElement}></textarea>
            </div>
           <div>
           <button onClick={addPost}>Add Post</button>
           </div>
           <div>
               {postsElement}
           </div>
        </div>
    );

}
export default MyPosts;