import * as axios from 'axios';
import s from './Users.module.css';
import avatar1 from '../../assets/img/avatar1.png';
import { Component } from 'react';
class Users extends Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
     onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items);
        })
    }
    render(){
        let pagesCount =Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages =[];
        for(let i=1; i<=pagesCount.length; i++){
            pages.push(i);
        }
        return <div className={s.usersWrapper}>
    <div>
        {pages.map(p => {
            return <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {this.onPageChanged (p) }}>{p}</span>
        })}
        
    </div>
            {
                this.props.users.map(u=><div className={s.users} key={u.id}>
                    <span >
                          <img src={u.photos.small!=null?u.photos.small:avatar1} alt="avatar"/>  
                          <div>{u.followed?<button onClick={()=>{this.props.unFollow(u.id)}}>Unfollow</button>:
                        <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>} </div>
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
}



export default Users;