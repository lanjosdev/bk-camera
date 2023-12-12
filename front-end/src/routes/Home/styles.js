import styled from 'styled-components'
import BG_01 from '../../assets/background_01New.jpg'

export const Main = styled.main`
    padding: 0 20px;
    @media screen and (max-width: 480px) {
        padding: 0 15px;
    }
    background: url(${BG_01});
    background-size: cover; //55rem; //780px
    background-position: center; //49% 45%
    background-repeat: no-repeat;
    
    position: absolute;
    width: 100%;
    height: 100%;
    /* max-height: fill-available;  */

    display: flex;
    justify-content: center;
    align-items: flex-end;

    .logos-footer {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: flex-end;
        gap: .7rem; */
        position: relative;
        
        /* top: -.5rem; */

        .logoWhopper {
            max-width: 65rem;
            position: absolute;
            bottom: calc(4.9rem + 1.5rem);
        }

        .logoBK {
            max-width: 4.5rem;
            position: absolute;
            bottom: 1.5rem;
        }
    }    


    /* RESPONSIVIDADE */
    @media screen and (max-width: 480px) {
        .logos-footer {   
            .logoWhopper {
                bottom: calc(5.9rem);
            }
            .logoBK {
                max-width: 10%;
            }
        } 
    }

    @media screen and (max-height: 590px) {
        background-position: center -35px;

        .logos-footer {   
            /* gap: .5rem;
            top: 0;    */

            .logoWhopper {
                max-width: 23rem;
            }

            .logoBK {
                max-width: 3rem;
            }
        } 
    }
`;