import React, { useState, useRef } from 'react'
import Webcam from "react-webcam";
import './style/style.css'
import './style/style.css.map'
import './style/style.scss'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
function WebcamCapture(props){
    const webcamRef = useRef(null);
    const [cameraOn, setCameraOn] = useState(false)

    const click = new Audio(process.env.PUBLIC_URL + '/assets/sound.mp3')

    const capture = () => {
        if(cameraOn){
            click.play()
            const imageSrc = webcamRef.current.getScreenshot();
            props.imageData(cameraOn, imageSrc)
        }
        else{ alert('Please turn on the camera first') }
    };

    const turnOnCamera = event => {
        event.preventDefault()
        setCameraOn(!cameraOn) 
    }

    return (
        <main id="auth-camera">
            <div className="camera">
                { cameraOn ? 
                (<Webcam id="videoElement" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" mirrored={true} />) 
                : <div id="videoElement"></div> }
                
            </div>
            <div className="controls">
                <button id="capture" onClick={capture}>
                    <PhotoCameraIcon/>
                </button>
                <button id="stop" onClick={turnOnCamera}>
                    <VideoCameraFrontIcon/>
                </button>
            </div>
        </main>
    );
};

export default WebcamCapture
