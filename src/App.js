import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';



const App=(props)=> {
        
  return (
        <BrowserRouter>
                <div className="app-wrapper">
                        <Header/>
                        <Navbar state={props.state.sidebar}/>
                        <div className="app-content-wrapper">
                        <Routes>
                                <Route path="/dialogs" element= {<Dialogs state={props.state.dialogsPages} dispatch={props.dispatch}/>}/>
                                <Route path="/profile" element={<Profile state={props.state.profilePages} dispatch={props.dispatch}/>}/>
                                <Route path="/news" element= {<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                         </div>
                </div>
        </BrowserRouter>

  );
}

export default App;
