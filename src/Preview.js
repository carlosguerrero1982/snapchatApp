import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './Preview.css';
import {selectCamaraImage} from "./features/camaraSlice";
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from "react-redux";
import {resetCamaraImage} from './features/camaraSlice';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';
import {v4 as uuid} from "uuid";
import {storage,db} from './firebase';
import firebase from "firebase";

function Preview() {

     const camaraImage = useSelector(selectCamaraImage);
     const dispatch = useDispatch();
      const history = useHistory();

 useEffect(() => {
     
    if(!camaraImage){
        history.replace('/');
    }
    
 }, [camaraImage,history])

const closePreview = () =>{

    dispatch(resetCamaraImage());
    
}

const sendPost = () =>{

    const id = uuid();

    const uploadtask = storage
    .ref(`posts/${id}`)
    .putString(camaraImage,'data_url');

    uploadtask.on('state_change',null,(error)=>{

        console.log(error);
    },()=>{

        storage.ref("posts").child(id).getDownloadURL().then((url)=>{

            db.collection('posts').add({
                imageUrl:url,
                username:'Carlos Guerrero',
                read:false,
              //  profilePic
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace('/chats');
        });
    })
}

    return (
        <div className="preview">

            < CloseIcon onClick={closePreview} className="preview_close" />


            <div className="preview_toolbarRight">

            <TextFieldsIcon />
            <CreateIcon />
            <NoteIcon />
            <MusicNoteIcon />
            <AttachFileIcon />
            <CropIcon />
            <TimerIcon />

            </div>

            <img src={camaraImage} alt=""/>

            <div onClick={sendPost} className="preview_footer">

                <h2>Send now</h2>

                <SendIcon fontSize="small" className="preview_sendIcon" />
            </div>
        </div>
    )
}

export default Preview
