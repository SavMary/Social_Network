import React from 'react';
import s from './Dialogs.module.css';
import { addMessageActionCreator, updateTextMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props)=>{
    let state=props.store.getState().dialogsPages

    let onAddMessage =()=>{
        props.store.dispatch(addMessageActionCreator())
    }
    let onNewMessageChange=(body)=>{
        props.store.dispatch(updateTextMessageCreator(body))
    }
    return <Dialogs updateTextMessage={onNewMessageChange} addMessage={onAddMessage} dialogsPages={state}/>
}
export default DialogsContainer;