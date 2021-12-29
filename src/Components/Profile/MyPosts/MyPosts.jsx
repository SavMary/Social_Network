import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts =(props)=>{
  debugger;
    let postsElement=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);
     let newPostElement=React.createRef();
    
    let onAddPost=()=>{
        
        props.addPost();
        // newPostElement.current.value='';
    }
    let onNewPostChange=()=>{
        let text = newPostElement.current.value;
         props.updateTextPostCreator(text)
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
            <textarea value={props.newPostBody} onChange={onNewPostChange} ref={newPostElement}></textarea>
            </div>
           <div>
           <button onClick={onAddPost}>Add Post</button>
           </div>
           <div>
               {postsElement}
           </div>
        </div>
    );

}
export default MyPosts;