// Funcionalidades / Libs:
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Webcam from "react-webcam";
import axios from 'axios';
import * as faceapi from 'face-api.js';
import {round} from "face-api.js/build/commonjs/utils";
// import {FaceExpressions} from "face-api.js";

// Assets:
import Loading from "../../assets/pulse_loading.gif";
import TakePicBtn from '../../assets/botao_foto.png'; 
import InvertCameraBtn from '../../assets/botao_virar.png'; 
import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from "../../assets/logo_bk.svg";

// Estilo:
import './camera.css';
import {Main} from "./styles";


export function TakePicture() {
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [modelLoading, setModelLoading] = useState(true);
    const [showPicBtn, setPicBtn]  = useState(true);

    const webcamRef = useRef(null);
    // const container = useRef(null);
    // const faceData = useRef(null);
    const isDetecting = useRef(false);
    const isClick = useRef(false);
    const isChangeMode = useRef(false);
    const navigate = useNavigate();


    useEffect(()=>{
        loadModels();
    },[]);
    const loadModels = ()=>{
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
            faceapi.nets.faceExpressionNet.loadFromUri("/models")
        ]).then(()=>{
            setTimeout(startGrabData, 800);
            setTimeout(()=> {
                setModelLoading(false);
            }, 1200);
        })
    };


    const videoConstraints = {
        width: { min: 1440, ideal: 1920, max: 1920 },
        height: { min: 960, ideal: 1080, max: 1080 },
        aspectRatio: 16 / 9,
        facingMode: cameraMode
    };

    async function startGrabData() {
        let grabbinData = setInterval(async () => {
            if(isChangeMode.current) {
                console.log('MUDOU MODO');
                isDetecting.current = false;
                isChangeMode.current = false;
                clearInterval(grabbinData);
                return;
            }

            const imageSrc = webcamRef.current.video;
            if(!imageSrc) {
                console.log('Erro ao pegar video, Tente novamente');
                return;            
            } else {
                if(isDetecting.current) {
                    console.log('REPETE');
                    return;
                }
    
                console.log('trying');
                isDetecting.current = true;
    
                // const imageSrc = webcamRef.current.video;
                let inputSize = 512;
                let scoreThreshold = 0.5;
                const options = new faceapi.TinyFaceDetectorOptions({inputSize, scoreThreshold});
    
                let data = await faceapi.detectSingleFace(imageSrc, options).withFaceExpressions();
                console.log('attempt');
    
                if(typeof data !== 'undefined') {
                    // if(typeof data.expressions !== "undefined") {
                    console.log('CARA DETECTADA');
                    isDetecting.current = false;
    
                    if(isClick.current) {
                        // voltar a versao anterior caso tenha bug
                        const imageRaw = webcamRef.current.getScreenshot();
                        console.log('CAPTURED');
                        ProcessPicture(imageRaw, data);
                        clearInterval(grabbinData);
                        return;
                    }
                    
                    return;
                    // }
                }
    
                isDetecting.current = false;
            }
        }, 500);
    }

    const capturePicture = async ()=> {
        isClick.current = true;
        console.log('CLICOU');
        // const imageSrc = webcamRef.current.video;
        // if(!imageSrc) {
        //     console.log('Erro ao pegar video, Tente novamente');
        //     return;            
        // }
        // setPicBtn(false);
        // startGrabData();
    };

    async function ProcessPicture(imageSrc, data)
    {
        setIsLoading(true);
        console.log('loading...');
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
        isChangeMode.current = true;

        if (cameraMode === 'user') {
            setCameraMode('environment');
            setCameraMirrored(false);
        } else {
            setCameraMode('user');
            setCameraMirrored(true);
        }

        setTimeout(()=> {
            console.log('chama de novo');
            startGrabData();
        }, 1200);
    }

    return (
        <Main>

            {modelLoading ? (
                <div className="container-load">
                    <img className="loading-page" src={Loading} alt="Carregamento da camera" />
                </div>
            ) : null}

            {isLoading === true ? (
                <div className="loading_container">

                    <div className="logos_Div">
                        <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                        <img className="logoBK" src={LogoBK} alt="Whopper da Ressaca" />
                    </div>
                </div>
            ) : (
                <div className="container">
                    
                    <Webcam ref={webcamRef} className="webcam" imageSmoothing={true} screenshotFormat='image/jpeg' mirrored={cameraMirrored} videoConstraints={videoConstraints} />
                    
                    <div className={`overlay_camera ${!showPicBtn && 'zoomMask'}`} />


                    {!showPicBtn ? 
                    <>
                        {/* Aproxime seu rosto e aguarde */}
                        {/* Optei em fazer uma animação que a mascara aumente na tela para indicar a aproximação do rosto */}
                    </> : 
                    <div className="faceInfo">
                        {/* Aproxime seu rosto e aguarde */}
                        Posicione seu rosto no sensor
                    </div>
                    }
    
                    {modelLoading === false ? (
                        
                    showPicBtn ? (
                        <>
                        <img
                        src={TakePicBtn}
                        className="takePic_Btn"
                        onClick={capturePicture}
                        alt="Botao de foto"
                        />

                        <img src={InvertCameraBtn} className="invertCam_Btn" onClick={ChangeCameraMode} alt="Botao de inverter camera" />
                        </>
                    ) : null
                        
                    ) : (
                        <img src={Loading} className="takePic_Btn" alt="Carregando" />
                    )}

                </div>
            )}
            
            
        </Main>
    );
}