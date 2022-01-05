import s from './Dialogs.module.css';
import { addMessageActionCreator, updateTextMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

    let mapStateToProps=(state)=>{
        return {
            dialogsPages:state.dialogsPages
        }
    }
    let mapDispatchToProps=(dispatch)=>{
        return{
            updateTextMessage:(body)=>{
                dispatch(updateTextMessageCreator(body))
            },
            addMessage:()=>{
                dispatch(addMessageActionCreator())
            }
        }
    }
        const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;