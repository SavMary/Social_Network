const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST_CREATOR = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    postsData:[
        {id: 1, message :"Hello!", likesCount:15},
        {id: 2, message:"Good afternoon", likesCount:9},
        {id: 3, message:"The weather is good", likesCount:57},
        {id: 4, message:"I like snow", likesCount:100}
      ],
      newPostBody:""
}
const profileReducer =(state = initialState,action)=>{
    switch (action.type) {
        case ADD_POST:{
           let newPost={
                id:5,
                message: state.newPostBody,
                likesCount: 0 
            };
        return{
          ...state,
           postsData:[...state.postsData, newPost],
           newPostBody: ""
        };
        }
        case UPDATE_TEXT_POST_CREATOR :
            return{
                ...state,
                newPostBody: action.body
            }

        

        default:
            return state;
    }
}
export const addPostActionCreator=()=>({type: ADD_POST})
export const updateTextPostCreator=(body)=>({type:UPDATE_TEXT_POST_CREATOR, body: body})
export default profileReducer;