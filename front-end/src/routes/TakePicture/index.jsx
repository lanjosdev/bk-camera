import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

export function TakePicture() {
    const [picture, setPicture] = useState(null);
    const webcamRef = useRef(null);
    const navigate = useNavigate();


    const videoConstraints = {
        width: {min: 1920},
        height: {min: 1080},
        // aspectRatio: 0.6666666667,
        aspectRatio: 16/9,
        facingMode: 'user'
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPicture(imageSrc);
    },[webcamRef]);

    function handlePictureTaked() {
        if (picture !== null) {
            navigate("/result", { state:picture });
        }
        
        console.log('NEXT PAGE CLICKED');
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100vh'}}>
            
            <h1 style={{ textAlign: 'center' }}>Take Picture Page</h1>

            <div style={{ width: '100%', height: '88vh', position: 'relative', display: 'flex', alignItems:'center', justifyContent:'center' }}>
                {picture === null ? (
                    <>
                        <Webcam ref={webcamRef} imageSmoothing={true} screenshotFormat='image/png' mirrored={true} videoConstraints={videoConstraints} style={{ position: 'absolute', width: '100%', height:'100%' }} />
                    
                        <button onClick={capture} style={{ position: 'absolute', bottom:'20px', left: '0', right: '0', width: '80px', height:'80px', borderRadius:'50%', margin:'0 auto', cursor: 'pointer', background: 'red', color:'whitesmoke', border:'2px solid black' }}>Take Pic</button>
                    </>
                ) : (
                    <>
                        <img src={picture} alt="screenshot" style={{ position: 'absolute', width: 'auto', height:'100%', margin:'0 auto' }}/>

                        <button onClick={handlePictureTaked} style={{ position: 'absolute', bottom:'20px', left: '0', right: '0', width: '80px', height:'80px', borderRadius:'50%', margin:'0 auto', cursor: 'pointer', background: 'green', color:'whitesmoke', border:'2px solid black'}}>Next</button>
                    
                    </>
                )}

            </div>
        
        </div>
    );
}