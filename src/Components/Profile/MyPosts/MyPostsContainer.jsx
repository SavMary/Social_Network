import MyPosts from "./MyPosts";
import {addPostActionCreator, updateTextPostCreator} from '../../../redux/profileReducer';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
            posts:state.profilePages.postsData, 
            newPostBody:state.profilePages.newPostBody}
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateTextPostCreator: (text) => {
            let action = updateTextPostCreator(text)
        dispatch(action)
    },
    addPost: () => {
        dispatch(addPostActionCreator())
    }}
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;