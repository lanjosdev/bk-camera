import styled from "styled-components";

export const MenorBackground = styled.div`
    width: 100%;
    height: fill-available;
    height: -webkit-fill-available;
    background-color: rgba(35, 35, 35, 0.74);
    
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    padding: 0 20px;
    @media screen and (max-width: 480px) {
        padding: 0 15px;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        border: none;
        background: none;

        color: white;
        font-size: 2.2rem;

        position: absolute;
        right: 2rem;
        top: 2rem;
    }   

    img {
        max-width: 95%;
    }

`;
