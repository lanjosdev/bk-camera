import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from 'axios';

import { Main } from "./styles";
import TakePicBtn from '../../assets/botao_foto.png';
import InvertCameraBtn from '../../assets/botao_virar.png';

export function TakePicture() {
    const [picture, setPicture] = useState(null);
    const [api_ready, setApi] = useState(null);
    const [json, setJson] = useState(null);
    const [result, setResult] = useState(null);
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const webcamRef = useRef(null);
    const navigate = useNavigate();
    const baseURL = '192.168.30.164';


    const videoConstraints = {
        width: { min: 1920 },
        height: { min: 1080 },
        aspectRatio: 16 / 9,
        facingMode: cameraMode
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPicture(imageSrc);
        generateJSON(imageSrc);
    }, [webcamRef]);

    function generateJSON(imageSrc) {
        let arr = imageSrc.split(",");
        const imageFormat = arr[0].match(/:(.*?);/)[1];
        const imageData = arr[1];

        const objFile = `{"img": "${imageData}"}`;
        const jsonFile = JSON.parse(objFile);

        setJson(jsonFile);
        sendJsonToApi(jsonFile);
    }

    async function sendJsonToApi(jsonFile) {
        axios.post('https://192.168.30.164', jsonFile).then((res) => {
            console.log(res.data);
            setResult(res.data);
            setApi(true);
        });

    }

    //json != null && console.log(json);

    function handlePictureTaked() {
        if (picture !== null) {
            var send_data = {
                img: picture,
                result: result
            }
            navigate("/result", { state: send_data });
        }

        console.log('NEXT PAGE CLICKED');
    }

    function ChangeCameraMode() {
        if (cameraMode === 'user') {
            setCameraMode('environment');
            setCameraMirrored(false);
        } else {
            setCameraMode('user');
            setCameraMirrored(true);
        }
    }

    return (
        <Main>
            <div className="container">
                {api_ready === null && picture === null ? (
                    <>
                        <Webcam ref={webcamRef} className="webcam" imageSmoothing={true} screenshotFormat='image/png' mirrored={cameraMirrored} videoConstraints={videoConstraints} />
                        <img src={TakePicBtn} className="takePic_Btn" onClick={capture} alt="Botao de foto" />
                        <img src={InvertCameraBtn} className="invertCam_Btn" onClick={ChangeCameraMode} alt="Botao de inverter camera" />
                    </>
                ) : (
                    <>
                        <img src={picture} className="pictureTaked" alt="screenshot" />
                        <button onClick={handlePictureTaked} className="next_btn" >Next</button>
                    </>
                )}
            </div>
        </Main>
    );
}