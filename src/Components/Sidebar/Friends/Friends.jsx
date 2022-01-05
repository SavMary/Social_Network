import s from './Friends.module.css';
const Friends = (props) => {
    return (
        <div className={s.friendsItem}>
        <div >
            <div className={s.photo}>
            {props.image}
            </div>
           <div>{props.name}</div> 
        </div>
        </div>

    )
}

export default Friends;
