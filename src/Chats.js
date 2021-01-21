import { Avatar } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'; 
import {db} from './firebase';
import Chat from './Chat';
import {useSelector} from "react-redux";
import {selectuser} from './features/appSlice';
import {auth} from './firebase';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {resetCamaraImage} from './features/camaraSlice';

function Chats() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectuser);

    useEffect(() => {
       
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>

            setPosts(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data(),
            }))))
            
    }, [])

    const takesnap = () =>{

        dispatch(resetCamaraImage());
        history.push('/')
    }

    return (
        <div className="chats">
            <div className="chats_header">

                <Avatar src={user?.profilePic} onClick={()=>{auth.signOut()}} className="chats_avatar" />

                <div className="chat_search">

                    <SearchIcon />
                    <input placeholder="friends" type="text"/>

                </div>

                <ChatBubbleIcon className="chats_chatIcon" />
            </div>

            <div className="chats_posts">

                {
                
                posts.map(({
                    id,
                    data:{profilePic,username,timestamp,imageUrl,read},
                }) => (

                    <Chat 

                    key={id}
                    id={id}
                    username={username}
                    timestamp={timestamp}
                    imageUrl={imageUrl}
                    read={read}
                    profilePic={profilePic}
                
                    />
                ))
                }

            </div>

        <RadioButtonCheckedIcon
        
        className="takePic"
        onClick={takesnap}
        fontSize='large'
        />

        </div>
    )
}

export default Chats
