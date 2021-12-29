const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_TEXT_MESSAGE_CREATOR = 'UPDATE-TEXT-MESSAGE-CREATOR';
    let initialState = {
            dialogsData:[
                {id:1, name:'Maryna'}, 
                {id:2, name:'Sasha'},
                {id:3, name:'Dima'},
                {id:4, name:'Natalia'},
                {id:5, name:'Lena'},
              ],
               messageData:[
                {id:1, message:"Hello!"},
                {id:2, message:"How are you?"},
                {id:3, message:"When will i see you?"},
                {id:4, message:"I miss you"},
                {id:5, message:"Yo!"},
              ],
              newMessageBody:""
    }
const dialogsReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            let body=state.newMessageBody
            state.newMessageBody=""
            state.messageData.push({id:6, message: body});
            return state;
        case UPDATE_TEXT_MESSAGE_CREATOR:
            state.newMessageBody =action.body;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator=()=>({type: ADD_MESSAGE})
export const updateTextMessageCreator=(body)=>({type:UPDATE_TEXT_MESSAGE_CREATOR, body: body})
export default dialogsReducer;