import {useCallback, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Webcam from "react-webcam";
import axios from 'axios';
import * as faceapi from 'face-api.js';


import {Main} from "./styles";

import TakePicBtn from '../../assets/botao_foto.png';
import InvertCameraBtn from '../../assets/botao_virar.png';
import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from "../../assets/Logo_BK.png";
import Loading from "../../assets/loading_camera.gif";
import {FaceExpressions} from "face-api.js";
import {round} from "face-api.js/build/commonjs/utils";


export function TakePicture() {
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [modelLoading, setModelLoading] = useState(true);
    const webcamRef = useRef(null);
    const container = useRef(null);
    const faceData = useRef([]);
    const isDetecting = useRef(false);
    const navigate = useNavigate();

    useEffect(()=>{
        loadModels()
    },[])

    const videoConstraints = {
        width: { min: 1440, ideal: 1920, max: 1920 },
        height: { min: 960, ideal: 1080, max: 1080 },
        aspectRatio: 16 / 9,
        facingMode: cameraMode
    }

    const loadModels = ()=>{
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
            //faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
            //faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
            faceapi.nets.faceExpressionNet.loadFromUri("/models")
        ]).then(()=>{
            isDetecting.current = true;
            startGrabData();
        })
    }

    function startGrabData()
    {
        setInterval(async()=> {
            if(!isDetecting.current)
                return;

            const imageSrc = webcamRef.current.video;
            let inputSize = 512
            let scoreThreshold = 0.5
            const options = new faceapi.TinyFaceDetectorOptions({inputSize, scoreThreshold});
            faceData.current = await faceapi.detectSingleFace(imageSrc, options).withFaceExpressions();
            if(modelLoading)
                setModelLoading(false);
        },700);
    }

    // TIRANDO A FOTO ------------------------------------
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        isDetecting.current = false;
        setIsLoading(true);
        ProcessPicture(imageSrc);
    }, [webcamRef]);

    async function ProcessPicture(imageSrc)
    {
        console.log('pressed');
        let arr = imageSrc.split(",");
        const imageFormat = arr[0].match(/:(.*?);/)[1];
        const imageData = arr[1];
        const objFile = `{"img": "${imageData}"}`;
        const jsonFile = JSON.parse(objFile);
        await sendJsonToApi(jsonFile, imageSrc);
    }

    async function sendJsonToApi(jsonFile, imageSrc)
    {
        await axios.post('https://api-bkressaca.bizsys.com.br/', jsonFile).then((res) =>
        {
            const expressionData = faceData.current.expressions;
            for (let key in expressionData)
            {
                if (expressionData.hasOwnProperty(key))
                    expressionData[key] = round(expressionData[key]);
            }
            const send_data =
            {
                img: imageSrc,
                result: faceData.current.expressions
            }
            setIsLoading(false);
            navigate("/result", { state: send_data });
        });

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
            <div ref={container} className="container">
                {isLoading === false && (
                    <>
                        <Webcam ref={webcamRef} className="webcam" imageSmoothing={true} screenshotFormat='image/png' mirrored={cameraMirrored} videoConstraints={videoConstraints} />
                        <div className="overlay_camera" />
                    </>
                )}
                {modelLoading === false ? (
                    <>
                    <img src={TakePicBtn} className="takePic_Btn" onClick={capture} alt="Botao de foto" />
                    </>
                ):
                (
                    <>
                        <img src={Loading} className="takePic_Btn" onClick={capture} alt="Carregando" />
                    </>
                )
                }
                <img src={InvertCameraBtn} className="invertCam_Btn" onClick={ChangeCameraMode} alt="Botao de inverter camera" />


                {isLoading === true ? (
                    <div className="loading_container">
                        <div className="logos_Div">
                            <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                            <img className="logoBK" src={LogoBK} alt="Whopper da Ressaca" />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Main>
    );
}