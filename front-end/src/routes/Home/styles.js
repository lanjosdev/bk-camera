import styled from 'styled-components'
import BG_01 from '../../assets/background_01.jpg'

export const Main = styled.main`
    padding: 20px;
    @media screen and (max-width: 480px) {
        padding: 15px;
    }
    background: url(${BG_01});
    background-size: cover; //55rem; //780px
    background-position: center; //49% 45%
    background-repeat: no-repeat;
    
    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .7rem;
        position: relative;
        /* top: -.5rem; */

        /* .logoWhopper {
            width: 21rem;
            position: absolute;
            bottom: 4.5rem;
        } */

        .logoBK {
            max-width: 5rem;
        }
    }    


    /* RESPONSIVIDADE */
    @media screen and (max-height: 600px) {
        background-position: center -35px;
        > div {   
            gap: .5rem;
            top: 0;   

            .logoWhopper {
                max-width: 23rem;
            }

            .logoBK {
                max-width: 3rem;
            }
        } 
    }
`;