import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props)=>{
    let state=props.dialogsPages
    let dialogsElement=state.dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messageData.map(m=><Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onAddMessage =()=>{
        props.addMessage()
    }
    let onNewMessageChange=(e)=>{
        let body = e.target.value
        props.updateTextMessage(body)
    }
    return(
        <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
        <div className={s.sendMessage}>
        <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
        </div>
        <div>
           <button onClick={onAddMessage}>Send Message</button>
           </div>
        </div>

        </div>

    );
}
export default Dialogs;