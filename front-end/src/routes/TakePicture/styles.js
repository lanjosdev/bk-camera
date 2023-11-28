import styled from 'styled-components';
import BG_02 from '../../assets/loading.jpg';
import BG_OV from '../../assets/mascara_camera.png';

export const Main = styled.div`
    background-color: black;

    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    flex-direction: column;

    overflow: hidden;

  .faceInfo  {    
    position: absolute;
    bottom: 10rem;
    width: 80%;    
    color: white;
    font-family: 'auxMono';
    font-size: 1em;
    text-align: center;
    z-index: 2;
    
  }

    .container {
        width: 100dvw;
        height: 100dvh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        z-index: 1;

        .webcam {
            z-index: 1;
            position: absolute;
            width: 110dvw;
            height: 110dvh;            
            border: 1px solid red;
        }

        .overlay_camera {
            position: absolute;
            width: 100%;
            height: 100vh;
            z-index: 2;
            background: url(${BG_OV});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .mask {
            width: 18rem;
            position: absolute;
            z-index: 3;
            animation: changeColor 25s infinite;
            /* border: 1px solid red; */
        }

        @keyframes changeColor {
            0% {filter: hue-rotate(0deg)}
            100% {filter: hue-rotate(600deg)}
        }

        .takePic_Btn {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 1.5rem;
            width: 5.5rem;
            margin: 0 auto;
            cursor: pointer;
            z-index: 4;
        }

        .invertCam_Btn {
            position: absolute;
            right: 6rem;
            bottom: 3rem;
            width: 2.1rem;
            cursor: pointer;
            z-index: 4;
        }

        .loading_container {
            width: 100%;
            height: 100vh;
            
            z-index: 5;
            position: absolute;

          background: url(${BG_02});
          background-size: cover;//55rem; //780px
          background-position: center; //49% 45%
          background-repeat: no-repeat;
          //background-color: var(--gray-bg);

          .logos_Div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .logoWhopper {
            width: 21rem;
            position: absolute;
            bottom: 4.5rem;
          }

          .logoBK {
            width: 11rem;
            position: absolute;
            bottom: 1rem;
          }

            color: var(--brown-font);

            .loading_background {
                width: 80dvw;
                height: 100dvh;

                position: absolute;
                left: 0;
                right: 0;

                margin: 0 auto;
                // border: 1px solid red;

                //celulares pequenos (altura)
                @media screen and (max-height: 670px) {
                    height: 80dvh;
                }
            }

            .logoWhopperANDbk_Div {
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
    }
    
`;
