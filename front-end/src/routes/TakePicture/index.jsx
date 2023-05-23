import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from 'axios';

import { Main } from "./styles";

import TakePicBtn from '../../assets/botao_foto.png';
import InvertCameraBtn from '../../assets/botao_virar.png';
import LogoWhopper from '../../assets/letras_carregando_1.png';
import Bg_overlay_mask from '../../assets/bg_overlay_camera.png';
import Mask from '../../assets/mask.png';

export function TakePicture() {
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const webcamRef = useRef(null);
    const navigate = useNavigate();

    const loadingMov = "https://bkressaca.bizsys.com.br/ressaca_loading.mov";
    const loadingWebm = "https://bkressaca.bizsys.com.br/ressaca_loading.webm";
    const [teste, setTeste] = useState(false);

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
        await axios.post('https://api-bkressaca.bizsys.com.br/', jsonFile).then((res) => {
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

    return (
        <Main>
            <div className="container">
                {isLoading === false && (
                    <>
                        <Webcam ref={webcamRef} className="webcam" imageSmoothing={true} screenshotFormat='image/png' mirrored={cameraMirrored} videoConstraints={videoConstraints} />
                        <img className="overlay_camera" src={Bg_overlay_mask} />
                        <img className="mask" src={Mask} />
                    </>
                )}
                <img src={TakePicBtn} className="takePic_Btn" onClick={capture} alt="Botao de foto" />
                <img src={InvertCameraBtn} className="invertCam_Btn" onClick={ChangeCameraMode} alt="Botao de inverter camera" />

                {isLoading === true ? (
                    <div className="loading_container">
                        <>
                            <video className="loading_background" autoPlay loop muted playsInline onLoadedData={() => setTeste(true)}>
                                <source src={loadingMov} type='video/mp4; codecs="hvc1"' />
                                <source src={loadingWebm} type='video/webm' />
                            </video>
                            {teste === true && <div className="logoWhopperANDbk_Div">
                                <p className="loadingText">Um momento <br />enquanto calculamos <br />o nivel do estrago.</p>
                                <img src={LogoWhopper} className="whopperLogo" alt="Icone de loading" />
                            </div>
                            }
                        </>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Main>
    );
}