import s from './Friends.module.css';
const Friends = (props) => {
    return (
        <div>
        <div className={s.friendsItem}>
            <div className={s.photo}>
            {props.image}
            </div>

            {props.name}
        </div>
        </div>

        


    )
}

export default Friends;
