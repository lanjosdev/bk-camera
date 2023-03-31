import styled from 'styled-components'
import BG_01 from '../../assets/background_01.jpg'


export const Main = styled.div`
    background: url(${BG_01});
    background-size: 55rem; //780px
    background-position: center; //49% 45%
    background-repeat: no-repeat;

    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    .redResult {
        width: 20rem;
        position: absolute;
        top: 8rem; //Bom no iphone 11
    }
    
    //celulares grandes (altura)
    @media screen and (min-height: 750px) {
        .redResult {
            top: 10.5rem;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .logoWhopper {
        width: 21rem;
        position: absolute;
        bottom: 4.5rem;
    }

    .logoBK {
        width: 11rem;
        position: absolute;
        bottom: 1rem;
    }
    
`;