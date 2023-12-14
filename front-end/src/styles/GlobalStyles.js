import { createGlobalStyle } from 'styled-components';
import FlameSansRegular from '../fonts/FlameSans-Regular.otf';
import FlameRegular from '../fonts/Flame-Regular.otf';
import FlameBold from '../fonts/Flame-Bold.ttf';
import AuxMono from '../fonts/AuxMono.otf';

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

    @font-face {
      font-family: 'auxMono';
      src: url(${AuxMono});
      font-weight: 100;
    }

    @mixin spacing-lateral() {
        padding: 0 20px;

        @media screen and (max-width: 480px) {
            padding: 0 15px;
        }
    }

    /* RESET */
    * , :before, :after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        /* overflow: hidden; */
    }

    img {
        display: inline-block;
        width: 100%;
        max-width: fit-content;
    }

    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    input, textarea, select {
        outline: none;
    }

    ul, ol, li {
        list-style: none;
    }

    button {
        cursor: pointer;
        display: inline-block;
    }
    /* RESET */


    /* GLOBAL */
    html {
        /* scroll-behavior: smooth; */
        height: fill-available;
        height: -webkit-fill-available;

        font-size: 62.5%; /* Pra usar rem divisivel por 10 */
        /* @media (max-width: 1080px) {
            font-size: 93.75%; //16x0,9375 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //16x0,875 = 14px
        } */
    }

    body {
        /* width: auto; */
        
        /* min-height: 100dvh; */
        /* min-height: fill-available; */
        /* min-height: -webkit-fill-available; */

        font-size: 1.6rem; /* Pra garantir q o padrao seja 16px no navegador*/
        -webkit-font-smoothing: antialiased;
        background-color: #131313;
        overflow-y: hidden;
    }

    body, input, textarea, button, select, a {
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'bkFont', sans-serif;
        font-weight: 500;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'bkFont';
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }  
    /* GLOBAL */


    /* GRID LAYOUT */
    .grid {
        width: 100%;
        max-width: 1216px;
        
        margin: 0 auto;
    }
    /* GRID LAYOUT */


    /* ANIMAÇÕES */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .fadeIn {
        animation: fadeIn .5s ease;
    }
    /* ANIMAÇÕES */
`;