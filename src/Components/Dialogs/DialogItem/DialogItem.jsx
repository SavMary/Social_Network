import {NavLink} from 'react-router-dom';
import s from './/DialogItem.module.css';
const DialogItem=(props)=>{
    let path = '/dialogs'+props.id;
    return(
        <div className={s.dialog }>
            <img src="https://salvemusic.com.ua/wp-content/uploads/2020/02/ava-max.jpg" alt="avatar" />
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;