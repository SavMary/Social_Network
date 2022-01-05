import s from './Users.module.css';
import avatar1 from '../../assets/img/avatar1.png';

 const Users = (props) => {
    let pagesCount =Math.ceil(props.totalUsersCount/props.pageSize);
    let pages =[];
    for(let i=1; i<=pagesCount/100; i++){
        pages.push(i);
    }
    return <div className={s.usersWrapper}>
    <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage} 
            onClick={(e) => {props.onPageChanged (p) }}>{p}</span>
        })}
        
    </div>
{
props.users.map(u=><div className={s.users} key={u.id}>
    <span >
          <img src={u.photos.small!=null?u.photos.small:avatar1} alt="avatar"/>  
          <div>{u.followed?<button onClick={()=>{props.unFollow(u.id)}}>Unfollow</button>:
        <button onClick={()=>{props.follow(u.id)}}>Follow</button>} </div>
    </span>

    <div className={s.usersInfo}>
        <div>
            <p>{u.name}</p>
            <p>{u.status}</p>
        </div>
        <div>
            <p>{'u.location.country'}</p>
            <p>{'u.location.city'}</p>
        </div>
    </div>

</div>)
}
</div>
      
    
}
export default Users;
