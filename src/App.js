import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
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
                        <Navbar store={props.store}/>
                        <div className="app-content-wrapper">
                        <Routes>
                                <Route path="/dialogs" element= {<DialogsContainer store={props.store}/>}/>
                                <Route path="/profile" element={<Profile store={props.store}/>}/>
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
