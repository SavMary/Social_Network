import React from 'react';
import s from './Sidebar.module.css';
import Navbar from './Sidebar';
import { connect } from 'react-redux';
// const NavbarContainer =(props)=>{
//   debugger;
//   let state = props.store.getState().sidebar;

//     return(
//         <Navbar state={state}/>
//     );

// }
let mapStateToProps =(state)=>{
  return{ state:state.sidebar}
}
let mapDispatchToProps=(dispatch)=>{

}
const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)
export default NavbarContainer;