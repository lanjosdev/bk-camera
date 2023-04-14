import { useState, useRef, useCallback , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from 'axios';

import { Main } from "./styles";

import TakePicBtn from '../../assets/botao_foto.png';
import InvertCameraBtn from '../../assets/botao_virar.png';
import BGBoneco from '../../assets/bg_boneco.jpg';
import LogoWhopper from '../../assets/letras_carregando_1.png';
import Frase from '../../assets/letras_carregando_2.png';

export function TakePicture() {
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const webcamRef = useRef(null);
    const mask_video = useRef(null)
    const navigate = useNavigate();



    const videoConstraints = {
        width: { min: 1440, ideal: 1920, max: 1920 },
        height: { min: 960, ideal: 1080, max: 1080 },
        aspectRatio: 16 / 9,
        facingMode: cameraMode
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // setPicture(imageSrc);
        generateJSON(imageSrc);
    }, [webcamRef]);

    function generateJSON(imageSrc) {
        let arr = imageSrc.split(",");
        const imageFormat = arr[0].match(/:(.*?);/)[1];
        const imageData = arr[1];

        const objFile = `{"img": "${imageData}"}`;
        const jsonFile = JSON.parse(objFile);

        sendJsonToApi(jsonFile, imageSrc);
    }

    async function sendJsonToApi(jsonFile, imageSrc) {
        setIsLoading(true);
        axios.post('https://api-bkressaca.bizsys.com.br/', jsonFile).then((res) => {
            // setApi(true);

            var send_data = {
                img: imageSrc,
                result: res.data
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

    useEffect(() => {
        console.log(window.innerWidth);
    });

    return (
        <Main>
            <div className="container">
                    {isLoading === false && (
                        <>
                            <Webcam ref={webcamRef} className="webcam" imageSmoothing={true} screenshotFormat='image/png' mirrored={cameraMirrored} videoConstraints={videoConstraints} />
                            <video ref={mask_video} width={window.innerWidth*2} height={window.innerWidth*4} className="mask_video" autoPlay loop muted playsInline>
                                <source
                                    src="https://bkressaca.bizsys.com.br/video_safari.mov"
                                    type='video/mp4; codecs="hvc1"'
                                />

                                <source
                                    src="https://bkressaca.bizsys.com.br/video_others.webm"
                                    type='video/webm'
                                />
                            </video>
                        </>
                    )}
                    <img src={TakePicBtn} style={{bottom: window.innerHeight*0.1}} className="takePic_Btn" onClick={capture} alt="Botao de foto" />
                    <img src={InvertCameraBtn} style={{bottom: window.innerHeight*0.12}} className="invertCam_Btn" onClick={ChangeCameraMode} alt="Botao de inverter camera" />

                    {isLoading === true ? (
                    <div className="loading_container">
                        <>
                            <video className="loading_background" style={{top: (window.innerHeight*0.10)*-1}} autoPlay loop muted playsInline>
                                <source src="https://bkressaca.bizsys.com.br/ressaca_loading.webm" type='video/webm' />
                            </video>
                            <img src={LogoWhopper} style={{position:"absolute",bottom:70}} width={window.innerWidth} height={window.innerWidth*0.357} alt="Icone de loading" />
                            <img src={Frase} style={{position:"absolute",bottom:(window.innerWidth*0.357)+70}} width={window.innerWidth} height={window.innerWidth*0.357} alt="Icone de loading" />
                        </>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Main>
    );
}