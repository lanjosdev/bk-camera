import styled from 'styled-components';
import BG_02 from '../../assets/loading.jpg';
import BG_OV from '../../assets/mascara_camera.png';

export const Main = styled.div`
    background-color: black;

    position: absolute;
    width: 100%;
    height: 100%;
    max-height: fill-available;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 

    overflow: hidden;

    .container-load {
        background-color: black;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;

        display: flex;
        align-items: center;
        justify-content: center;

        .loading-page {
            max-width: 13rem;
        }
    }

    .faceInfo  {    
        position: absolute;
        bottom: 17rem;
        width: 80%;    
        color: var(--gray-bg);
        /* font-family: 'auxMono'; */
        font-size: 1em;
        text-align: center;
        z-index: 2;

        @media screen and (max-height: 580px) {
            bottom: 10.5rem;
            font-size: 1.3rem;        
        }

        &.processando {
            bottom: 14rem;

            @media screen and (max-height: 580px) {
                bottom: 7rem;
            }
        }
    }

    .container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        z-index: 1;

        .webcam {
            z-index: 1;
            position: absolute;
            width: 100%;
            height: 100%;            
            border: 1px solid red;
        }

        .overlay_camera {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            background: url(${BG_OV});
            background-size: 145%;
            background-position: center;
            background-repeat: no-repeat;

            /* &.zoomMask {
                animation: zoomMascara .7s forwards;
            } */

            @media screen and (min-width: 800px) {
                background-size: cover;
                
                /* &.zoomMask {
                    animation: none;
                }    */
            }
        }

        .takePic_Btn {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 3.5rem;

            max-width: 6.5rem;
            margin: 0 auto;
            cursor: pointer;
            z-index: 4;
        }

        .invertCam_Btn {
            position: absolute;
            right: 6rem;
            bottom: 5.5rem;

            max-width: 2.5rem;
            cursor: pointer;
            z-index: 4;
        }

    }

    .loading_container {
        width: 100%;
        height: 100%;
        
        z-index: 5;
        position: absolute;

        background: url(${BG_02});
        background-size: cover;//55rem; //780px
        background-position: center; //49% 45%
        background-repeat: no-repeat;

        .logos_Div {
            padding: 0 20px;
            @media screen and (max-width: 480px) {
                padding: 0 15px;
            }
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;         
        
            .logoWhopper {
                padding: 0 20px;
                @media screen and (max-width: 480px) {
                    padding: 0 15px;
                }
                max-width: 65rem;
                position: absolute;
                bottom: calc(4.9rem + 1.5rem);
            }
            .logoBK {
                max-width: 4.5rem;
                position: absolute;
                bottom: 1.5rem;
            }

            @media screen and (max-width: 480px) {
                .logoWhopper {
                    bottom: calc(5.9rem);
                }
                .logoBK {
                    max-width: 9.234%;
                }
            }

            @media screen and (max-height: 590px) {
                .logoWhopper {
                    max-width: 23rem;
                }

                .logoBK {
                    max-width: 3rem;
                }
            }
        }    



        color: var(--brown-font);

        .loading_background { // Não achei
            width: 80vw;
            height: 100vh;

            position: absolute;
            left: 0;
            right: 0;

            margin: 0 auto;
            // border: 1px solid red;

            //celulares pequenos (altura)
            @media screen and (max-height: 670px) {
                height: 80vh;
            }
        }
        .logoWhopperANDbk_Div { // Não acheii
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5rem;

            position: absolute;
            bottom: 4rem;
            right: 0;
            left: 0;
            margin: 0 auto;

            //celulares pequenos (altura)
            @media screen and (max-height: 670px) {
                gap: 3rem;
            }

            .loadingText {
                font-size: 1.1rem;
                
                text-align: center;
                line-height: 1.3rem;
                text-transform: uppercase;

                z-index: 1;

                //celulares pequenos (altura)
                @media screen and (max-height: 670px) {
                    font-size: 1rem;
                }
            }              

            .whopperLogo {
                width: 26rem;

                //celulares pequenos (altura)
                @media screen and (max-height: 670px) {
                    width: 24rem;
                }
            }
        }
    }

    /* ANIMAÇÃO */
    /* @keyframes zoomMascara {
        0% {
            background-size: 140%;
        }
        100% {
            background-size: 155%;
        }        
    } */
`;
