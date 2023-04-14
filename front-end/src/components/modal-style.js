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
    flex-direction: column;
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

        button {
            border: none;
            background: none;

            color: black;
            font-size: 2.2rem;

            position: absolute;
            right: 1rem;
            top: .5rem;
        }

        p {
            width: 90%;
            margin-top: 5rem;
        }
    }
`;
