import styled from 'styled-components';

export const Main = styled.div`
    background-color: black;

    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    flex-direction: column;

    overflow-y: hidden;

    .container {
        width: 100%; 
        height: 100vh; 
        position: relative; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        
        z-index: 1;

        .webcam {
            position: absolute; 
            width: 100%; 
            height: 100vh;
        }

        .mask_video {
            position: absolute;
            z-index: 3;
            width: 60%;
            height: 70%;
            aspect-ratio: 9/16;
        }

        .takePic_Btn {
            position: absolute; 
            bottom: 1.5rem; 
            left: 0; 
            right: 0; 
            width: 5.5rem; 
            margin: 0 auto; 
            cursor: pointer; 
            z-index: 3;
        }

        .invertCam_Btn {
            position: absolute; 
            bottom: 3rem; 
            right: 6rem; 
            width: 2.1rem; 
            cursor: pointer;
            z-index: 3;
        }

        .loading_container {
            width: 100%;
            height: 100vh;
            
            z-index: 4;
            position: absolute;

            background-color: var(--gray-bg);

            color: var(--brown-font);

            .loading_background {
                position: fixed;
                top: 0;
                left: 0;
                object-fit: cover;
                width: 100%;
            }

            
            .loadingANDtext_Div {
                width: 100%;
                height: 82vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                

                .loadingIcon {
                    width: 15rem;
                }

                .loadingText {
                    font-size: 1.1rem;
                    
                    text-align: center;
                    line-height: 1.3rem;
                    text-transform: uppercase;

                    z-index: 1;
                }

            }

            .logoWhopperANDbk_Div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;

                position: absolute;
                bottom: 3.8rem;
                right: 0;
                left: 0;
                margin: 0 auto;

                .whopperLogo {
                    width: 21rem;
                }

                .bkLogo {
                    width: 11rem;
                }
            }



        }
    }

    

    
`;