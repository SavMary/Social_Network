const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_TEXT_MESSAGE_CREATOR = 'UPDATE-TEXT-MESSAGE-CREATOR';
    
const dialogsReducer =(state,action)=>{
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