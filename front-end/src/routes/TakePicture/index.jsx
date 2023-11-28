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
import Loading from "../../assets/pulse_loading.gif";
import {FaceExpressions} from "face-api.js";
import {round} from "face-api.js/build/commonjs/utils";


export function TakePicture() {
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [modelLoading, setModelLoading] = useState(true);
    const webcamRef = useRef(null);
    const container = useRef(null);
    const faceData = useRef(null);
    const isDetecting = useRef(false);
    const [showPicBtn, setPicBtn]  = useState(true);
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
            faceapi.nets.faceExpressionNet.loadFromUri("/models")
        ]).then(()=>{
            setModelLoading(false);
        })
    }

    function startGrabData()
    {
        let grabbinData = setInterval(async()=>
        {
            if(isDetecting.current)
                return;
            console.log('trying');
            isDetecting.current = true;

            const imageSrc = webcamRef.current.video;
            let inputSize = 512
            let scoreThreshold = 0.5
            const options = new faceapi.TinyFaceDetectorOptions({inputSize, scoreThreshold});

            let data = await faceapi.detectSingleFace(imageSrc, options).withFaceExpressions();
            console.log('attempt');

            if(typeof data !== 'undefined' ) {
                if (typeof data.expressions !== "undefined")
                {
                    isDetecting.current = false;
                    console.log('captured');
                    clearInterval(grabbinData);
                    const imageRaw = webcamRef.current.getScreenshot();
                    ProcessPicture(imageRaw, data);
                    return;
                }
            }
            isDetecting.current = false;
        },500);
    }

    const capturePicture = async function()
    {
        const imageSrc = webcamRef.current.video;
        if(!imageSrc)
            return;
       startGrabData();
    }

    async function ProcessPicture(imageSrc, data)
    {
        setIsLoading(true);
        console.log('captured');
        let arr = imageSrc.split(",");
        const imageFormat = arr[0].match(/:(.*?);/)[1];
        const imageData = arr[1];
        const objFile = `{"fk_id_project": 3}`;
        const jsonFile = JSON.parse(objFile);
        await sendJsonToApi(jsonFile, imageSrc, data);
    }

    async function sendJsonToApi(jsonFile, imageSrc, data)
    {

        await axios.post('https://cloudmanager.bizsys.com.br/api/voucheruse', jsonFile,{
            headers: {
                'Authorization' : 'Bearer $2y$10$KIZtpBs0YMYD7uCfpTsRMe1gQWGrSlD5COANQlv8YJoAaaOfDzM1q',
                'Content-Type' : 'application/json'
            }
        }).then((response) =>{
            const expressionData = data.expressions;
            const voucher = (response.data.success)?response.data.data.voucher:"none";

            // Arredondando os valores da detecção
            for (let key in expressionData)
            {
                if (expressionData.hasOwnProperty(key))
                    expressionData[key] = round(expressionData[key]);
            }

            const send_data =
            {
                img: imageSrc,
                voucher:voucher,
                result: expressionData
            }
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
            {!showPicBtn && isLoading === false ? <div className="faceInfo">Aproxime seu rosto e aguarde</div>:null}

            <div ref={container} className="container">
                {isLoading === false && (
                    <>
                        <Webcam ref={webcamRef} className="webcam" imageSmoothing={true} screenshotFormat='image/jpeg' mirrored={cameraMirrored} videoConstraints={videoConstraints} />
                        <div className="overlay_camera" />
                    </>
                )}
                {modelLoading === false ? (
                    <>
                    {showPicBtn ?<img src={TakePicBtn} className="takePic_Btn" onClick={event => {
                        setPicBtn(false);
                        setTimeout(async()=>
                        {
                            capturePicture();
                        },100);

                    }} alt="Botao de foto" />:null}
                    </>
                ):
                (
                    <>
                    <img  src={Loading} className="takePic_Btn" alt="Carregando" />
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