import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
const Navbar =(props)=>{
let sidebarElement = props.state.sidebarData.map(e=><Friends id={e.id} name={e.name} image={e.image}/>)
    return(
        <nav className={s.sidebar}>             
        <div className={s.item}>
          <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
          </div>
        <div className={s.item}>
          <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
          </div>
        <div className={s.item}>
          <NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
          </div>
        <div className={s.item}>
          <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }> Music</NavLink>
          </div>
        <div className={s.item}>
          <NavLink to="Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
          </div>
          <div>
          <div className={s.item}>
            <h2>Friends</h2>
        </div>
          {sidebarElement}
          </div>
      </nav>
    );

}
export default Navbar;