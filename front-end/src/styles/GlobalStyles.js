import { createGlobalStyle } from 'styled-components';
import FlameSansRegular from '../fonts/FlameSans-Regular.otf';
import FlameRegular from '../fonts/Flame-Regular.otf';
import FlameBold from '../fonts/Flame-Bold.ttf';

export default createGlobalStyle`
    :root {
        --gray-bg: #F3EADA;
        --brown-font: #48281B;
    }

    @font-face {
        font-family: 'bkFont';
        src: url(${FlameSansRegular});
        font-weight: 400;
    }

    @font-face {
        font-family: 'bkFont';
        src: url(${FlameRegular});
        font-weight: 500;
    }

    @font-face {
        font-family: 'bkFont';
        src: url(${FlameBold});
        font-weight: 600;
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
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'bkFont';
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'bkFont';
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