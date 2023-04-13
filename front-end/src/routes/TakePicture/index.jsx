import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import axios from 'axios';

import { Main } from "./styles";

import TakePicBtn from '../../assets/botao_foto.png';
import InvertCameraBtn from '../../assets/botao_virar.png';
import LoadingIcon from '../../assets/icone_loading.svg';
import LogoWhopper from '../../assets/logo_whopper.svg';
import LogoBK from '../../assets/logo_bk.svg';
import Background_loading from '../../assets/loading_anim.mp4'

export function TakePicture() {
    const [cameraMode, setCameraMode] = useState('user');
    const [cameraMirrored, setCameraMirrored] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const webcamRef = useRef(null);
    const navigate = useNavigate();

    const videoConstraints = {
        width: { min: 1920 },
        height: { min: 1080 },
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
            console.log(jsonFile);
            console.log(res.data);
            // setApi(true);

            var send_data = {
                img: imageSrc,
                result: res.data
            }
            console.log('send_data: ', send_data);
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
                        <video className="mask_video" autoPlay loop muted playsInline>
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
                <img src={TakePicBtn} className="takePic_Btn" onClick={capture} alt="Botao de foto" />
                <img src={InvertCameraBtn} className="invertCam_Btn" onClick={ChangeCameraMode} alt="Botao de inverter camera" />

                {isLoading === true ? (
                    <div className="loading_container">
                        <video className="loading_background" autoPlay loop muted>
                            <source src={Background_loading} type='video/mp4' />
                        </video>
                        <div className="loadingANDtext_Div">
                            <img src={LoadingIcon} className="loadingIcon" alt="Icone de loading" />
                            {/* <p className="loadingText">Um momento <br />enquanto calculamos <br />o nivel do estrago.</p> */}
                        </div>
                        <div className="logoWhopperANDbk_Div">
                            <img src={LogoWhopper} className="whopperLogo" alt="Logo Whopper da ressaca" />
                            <img src={LogoBK} className="bkLogo" alt="Logo do Burguer King" />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Main>
    );
}