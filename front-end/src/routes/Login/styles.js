import styled from 'styled-components';
import BG_02 from '../../assets/background_02.png';

export const Main = styled.div`
    background: url(${BG_02});
    background-size: 55rem; //780px
    background-position: center -13rem; //49% 45%
    background-repeat: no-repeat;

    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    justify-content: center; //Teste
    flex-direction: column;
    gap: 2rem;

    h1 {
        color: white;
        text-transform: uppercase;
        margin-bottom: -20px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        color: white;
        /* border: 1px solid pink; */

        .inputField_Div {
            width: 90%;
            height: 5rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
            /* gap: .5rem; */

            border: 2px solid white;
            border-radius: 0.6rem;
            padding: 0.5rem 2rem;

            input {
                width: 65%; //ajustar depois
                height: 3rem;

                font-size: 1.5rem;
                color: white;

                border: none;
                background: none;
            }

            .formIcons {
                width: 2.5rem;
            }
        }
    }

    .imgANDterms_Div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .logoWhopper {
        width: 23rem;
        position: absolute;
        bottom: 6.5rem;
    }

    .termos {
        width: 27rem;
        position: absolute;
        bottom: 1rem;
    }
`;