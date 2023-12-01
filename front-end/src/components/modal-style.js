import styled from "styled-components";

export const ModalBackground = styled.div`
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

    display: flex;
    align-items: center;
    justify-content: center;


    .modal-container {
        width: 90%;
        height: 90%;
        background-color: var(--gray-bg);
        border-radius: 1rem;

        color: black;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        scroll-behavior: smooth;

        padding: 1.5rem 1rem 1.5rem 1.5rem;

        button {
            border: none;
            background: none;

            color: black;
            font-size: 2.2rem;

            position: absolute;
            right: 1.3rem;
            top: .6rem;
        }    
        
        h2 {
            margin-top: 1rem;
            margin-bottom: 1.8rem;

            @media screen and (max-width: 420px) {
                align-self: flex-start;                
            }
        }

        p {
            text-align: justify;
            overflow-y: auto;

            padding-right: 1.5rem;
            padding-bottom: 6rem;
            /* margin-bottom: 3rem; */
        }
    }
`;
