import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --gray-bg: #F3EADA;
        --brown-font: #48281B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: fill-available;
        height: -webkit-fill-available;

        @media (max-width: 1080px) {
            font-size: 93.75%; //16x0,9375 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //16x0,875 = 14px
        }
    }

    body {
        width: 100%;
        /* height: fill-available; */
        /* border: 1px solid red; */

        min-height: 100dvh;
        /* min-height: fill-available; */
        /* min-height: -webkit-fill-available; */

        -webkit-font-smoothing: antialiased;
        background-color: black;
        overflow-y: hidden;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }  
`;