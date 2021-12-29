import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateTextPostCreator} from '../../../redux/profileReducer';

const MyPostsContainer =(props)=>{
    debugger;
    let state = props.store.getState().profilePages;
    
    let addPost=()=>{
        props.store.dispatch(addPostActionCreator());
    }
    let onNewPostChange=(text)=>{
        let action = updateTextPostCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts updateTextPostCreator={onNewPostChange} 
        addPost={addPost} posts={state.postsData} newPostBody={state.newPostBody}/>
    );

}
export default MyPostsContainer;