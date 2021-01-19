import React,{useRef,useCallback,useState} from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from "react-redux";
import {setCamaraImage} from './features/camaraSlice';

const videoConstraints = {

    width:250,
    height:400,
    facingMode:"user",
};



 function Webcamcapture(props) {
    
     const webcamRef = useRef(null);

     const dispatch = useDispatch();

     const [image, setImage] = useState(null);

     const capture = useCallback(() => {
             
        const imageSrc = webcamRef.current.getScreenshot();

        dispatch(setCamaraImage(imageSrc));
        

      //  console.log(imageSrc);
        setImage(imageSrc);

         },[webcamRef])

    return (
        <div className="webcamcapture">
            <Webcam 
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon 
            className="webcam_button" 
            onClick={capture}
            fontSize="large"
            
            />

                <img src={image} alt=""/>
        </div>
    )
}

export default Webcamcapture;
