import styled from 'styled-components';

export const Main = styled.div`
    background-color: black;
    /* border: 1px solid red; */

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

        .takePic_Btn {
            position: absolute; 
            bottom: 1.5rem; 
            left: 0; 
            right: 0; 
            width: 5.5rem; 
            margin: 0 auto; 
            cursor: pointer; 
        }

        .invertCam_Btn {
            position: absolute; 
            bottom: 3rem; 
            right: 6rem; 
            width: 2.1rem; 
            cursor: pointer;
        }

        .pictureTaked {
            position: absolute; 
            width: auto; 
            height: 100%; 
            margin: 0 auto;
        }

        .next_btn {
            position: absolute; 
            bottom: 20px; 
            left: 0; 
            right: 0; 
            width: 80px; 
            height: 80px; 
            border-radius: 50%; 
            margin: 0 auto; 
            cursor: pointer; 
            background: green; 
            color: whitesmoke; 
            border: 2px solid black;
        }
    }

    .webcam {
        position: absolute; 
        width: 100%; 
        height: 100vh;
    }
`;