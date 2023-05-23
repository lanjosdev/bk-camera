import styled from 'styled-components';

export const Main = styled.div`
    background-color: black;

    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    flex-direction: column;

    overflow: hidden;

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
            width: 105dvw;
            height: 105dvh;
            
            border: 1px solid red;
        }

        .overlay_camera {
            position: absolute;
            z-index: 2;
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

            background-color: var(--gray-bg);

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
