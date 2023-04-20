import styled from 'styled-components';

export const Main = styled.div`
    background-color: var(--gray-bg);
    /* border: 1px solid red; */

    width: 100dvw;
    height: 100dvh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    flex-direction: column;
    /* gap: 2rem; */

    .first_Div {
        display: flex;
        flex-direction: column;
        align-items: center;

        position: absolute;
        top: 2rem;

        .first_text {
            text-transform: uppercase;
            font-size: 1rem;    
        }       
        
        .whopper_text {
            color: var(--brown-font);
            font-size: 4.5rem;
            text-align: center;
            text-transform: uppercase;
            line-height: 4.2rem;            
        }
    }

    .second_Div {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;

        .textANDcode_div {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            .second_text {
                text-transform: uppercase;
                font-size: 1rem;    
            }

            .combo_code {
                border: 2px solid var(--brown-font);
                padding: .5rem 1rem;
    
                color: var(--brown-font);
                font-size: 2rem;
                text-transform: uppercase;
                letter-spacing: 3px;
    
                user-select: none;
            }
        }



        .comboWhopper {
            width: 65%;
        }
    }

    .logos_Div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        position: absolute;
        bottom: 1rem;

        .logoWhopper {
            width: 21rem;
        }

        .logoBK {
            width: 11rem;
        }
    }


`;