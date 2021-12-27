const ADD_POST = 'ADD-POST';

const profileReducer =(state,action)=>{
    if(action.type===ADD_POST){
        let newPost  ={
            id:5,
            message: action.text,
            likesCount: 0
        }
        state.postsData.push(newPost);
    }
    return state
}
export const addPostActionCreator=(text)=>{
    return{
        type: ADD_POST, 
        text: text
    }
}
export default profileReducer;