import styled from 'styled-components';
import BG_02 from '../../assets/background_02.jpg';

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
                box-shadow: none;
                outline: none;
            }

            .formIcons {
                width: 2.5rem;
            }
        }

        .checkbox_label {
            /* border: 1px solid red; */
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: left;
            gap: .4rem;
            margin: 0 auto;
            margin-left: 1.5rem;
            
            /* color: black; */
            font-size: 1.1rem;
            font-weight: 500;

            span {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        > button {
            background: none;
            border: 2px solid var(--gray-bg);
            border-radius: .5rem;
            padding: .8rem 3.5rem;
            
            color: var(--gray-bg);
            font-size: 1.2rem;
            font-weight: 500;
        }
    }

    .logos_Div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .logoWhopper {        
        position: absolute;
        bottom: 4.5rem;
    }

    .logoBK {        
        position: absolute;
        bottom: 1rem;
        width: 25rem;
    }
`;