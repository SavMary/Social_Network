import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



 export let renederTree =(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)} state={state}/>
    </React.StrictMode> ,document.getElementById('root'));
}
renederTree(store.getState());
store.subscribe(()=>{
  let state = store.getState()
  renederTree(state)
});



