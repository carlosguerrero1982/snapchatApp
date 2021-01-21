import React,{useEffect} from 'react';
import './App.css';
import Webcamcapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import Login from './Login';
import {useSelector} from "react-redux";
import {login, logout, selectuser} from './features/appSlice';
import {useDispatch} from "react-redux";
import {auth} from './firebase';

function App() {

  const user = useSelector(selectuser);

  const dispatch = useDispatch();

  useEffect(() => {
   
    auth.onAuthStateChanged((authUser)=>{

      if(authUser){
        dispatch(login({
          username:authUser.displayName,
          profilePic:authUser.photoURL,
          id:authUser.uid
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="app">
  
  <Router>

    {!user ? (
      <Login />
    ):(

      <>
      <img className="snapchatimg" src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt=""/>

      <div className="app_body">

        <div className="app_bodyBack">

        <Switch>

        <Route  path="/chats/view">
         <ChatView />
        </Route>

        <Route  path="/chats">
          <Chats />
        </Route>


        <Route  path="/preview">
          <Preview />
        </Route>


         <Route exact path="/">
          <Webcamcapture />
        </Route>

        </Switch>
        
      </div>
        
      </div>

      </>

    )}
      

    </Router>
     


    </div>
  );
}

export default App;
