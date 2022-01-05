import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import Users from "./UsersClass";
let mapStateToProps=(state)=>{
        return{
            users: state.usersPage.userData,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage
        }
}
let mapDispatchToProps=(dispatch)=>{
        return{
            follow:(userId)=>{
                dispatch(followAC(userId))
            },
            unFollow:(userId)=>{
                dispatch(unfollowAC(userId))

            },
            setUsers:(users)=>{
                dispatch(setUsersAC(users))
            },
            setCurrentPage:(pageNumber)=>{
                dispatch(setCurrentPageAC(pageNumber))
            },
            setTotalUsersCount:(totalCount)=>{
                dispatch(setTotalUsersCountAC(totalCount))
            }
        }
}
const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;