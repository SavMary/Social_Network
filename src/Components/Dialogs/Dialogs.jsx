import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
const Dialogs = (props)=>{
    let dialogsElement=props.state.dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messageData.map(m=><Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef();
    let addMessage =()=>{
        let text = newMessageElement.current.value;
        props.addMessage(text);
        newMessageElement.current.value='';
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
            <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
           <button onClick={addMessage}>Send Message</button>
           </div>
        </div>

        </div>

    );
}
export default Dialogs;