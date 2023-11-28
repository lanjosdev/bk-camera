import styled from 'styled-components';
import LOGOHACK from '../../assets/bg_hacker.png';

export const Main = styled.div`
  
    background: url(${LOGOHACK});
    background-size: cover;//55rem; //780px
    background-position: center; //49% 45%
    background-repeat: no-repeat;

    width: 100dvw;
    height: 100dvh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    flex-direction: column;
    /* gap: 2rem; */

     .moderation{
      position: absolute;
      right: 0px;
      top: 25%;
      height: 50%;
    }

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
  
    .headerCupom{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      position: absolute;
      top: 1rem;
      
      .headerA {
        width: 80%;
      }
      
      .cupom
      {
        width: 22rem;
        color: white;
        font-family: 'auxMono';
        font-size: 2em;
        text-align: center;
        border: 1px solid #fff;
      }

      .headerB {
        //width: 80%;
        width: 22rem;
        cursor: pointer;
      }

      .headerC {
        width: 80%;
      }
      
      .second_text {
        color: white;
        text-transform: uppercase;
        font-size: 1rem;
      }
      @media screen and (max-height: 680px) {
        .headerCupom {         
          gap: 0rem;
        }
        .headerA {
          width: 18rem;
        }
        .headerC {
          width: 18rem;
        }
        .cupom
        {
          width: 20rem;
        }
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
          width: 18rem;
        }

        .logoBK {
            width: 11rem;
        }

        .headerShare
        {
          width: 19rem;
          cursor: pointer;
        }
        @media screen and (max-height: 670px) {
          .logoWhopper {
            width: 19rem;
          }
        }
      }
    }

   


`;