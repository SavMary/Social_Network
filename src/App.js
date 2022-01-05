import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import NavbarContainer from './Components/Sidebar/SidebarContainer';
import UsersContainer from './Components/Users/UsersContainer';



const App=()=> {
  return (
                <div className="app-wrapper">
                        <Header/>
                        <NavbarContainer />
                        <div className="app-content-wrapper">
                        <Routes>
                                <Route path="/dialogs" element= {<DialogsContainer />}/>
                                <Route path="/profile" element={<Profile />}/>
                                <Route path="/news" element= {<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                         </div>
                </div>
  );
}

export default App;
