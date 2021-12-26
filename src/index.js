import './index.css';
import store from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



 export let renederTree =(state)=>{

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode> ,document.getElementById('root')


  );
}
renederTree(store.getstate());
store.subscribe(renederTree);



