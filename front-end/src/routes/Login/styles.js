import styled, {css} from 'styled-components';
import BG_02 from '../../assets/background_02.jpg';

export const Main = styled.main`
    padding: 0 20px;
    @media screen and (max-width: 480px) {
        padding: 0 15px;
    }
    background: url(${BG_02});
    background-size: cover;//55rem; //780px
    background-position: center; //49% 45%
    background-repeat: no-repeat;

    position: absolute;
    width: 100%;
    height: 100%;
    /* max-height: fill-available; */

    display: flex;
    justify-content: center;
    align-items: center;

    .content-main {
      margin-top: -3.5rem;

      width: 100%;
      max-width: 90rem;
      color: var(--gray-bg);

      h1 {
        text-align: center;
        text-transform: uppercase;

        margin-bottom: .5rem;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        /* border: 1px solid pink; */

        .inputField_Div {
          border: 2px solid var(--gray-bg);
          border-radius: 0.8rem;
          width: 95%;
          height: 5.2rem;

          display: flex;
          justify-content: space-between;
          align-items: center;
          /* gap: .5rem; */

          padding: 0 1.2rem;

          transition: all .3s ease;
          &.nasc {
            border: 2px solid ${props => (props.erroNasc ? '#FF0000' : ' var(--gray-bg)')};
          }

          label {
            max-width: 10rem;
          }

          input {
            width: 65%;
            height: 70%;

            font-size: 1.6rem;
            color: var(--gray-bg);
            background: none;

            overflow: hidden;

            &::placeholder {
              color: var(--gray-bg);
            }

            &#nasc {
              margin-left: 1rem;
              align-self: flex-end;
            }
          }

          .formIcons {
              max-width: 2.5rem;
          }
        }

        .checkbox_label {
          width: 95%;
          display: flex;
          align-items: center;
          gap: .4rem;
        
          font-size: 1.2rem;
          font-weight: 400;

          .checkbox_field {
            /*  */
          }

          p {
            text-shadow: 0px 0px 7px black;
            span {
                cursor: pointer;
                text-decoration: underline;
                font-weight: bold;
            }
          }
        }

        > button {
          margin-top: 1rem;

          background-color: transparent;
          -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
          border: 2px solid var(--gray-bg);
          border-radius: .8rem;
          padding: .8rem 3.5rem;
          
          color: var(--gray-bg);
          font-size: 1.4rem;
          font-weight: 500;
          text-transform: uppercase;

          transition: all .3s ease; 

          &:active, &:hover {
            background-color: var(--gray-bg);
            color: var(--brown-font);
          }
        }
      }
    }

    .logos-footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: flex-end;
      gap: .7rem; */
      /* top: -.5rem; */

      .logoWhopper {
          padding: 0 20px;
          @media screen and (max-width: 480px) {
              padding: 0 15px;
          }
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
              max-width: 9.234%;
          }
      } 
    }

    @media screen and (max-height: 590px) {
        /* background-position: center -35px; */
        .content-main {
          margin-top: -6.5rem;
        }

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

    @media screen and (max-height: 480px) {
        .logos-footer {  
            .logoWhopper {
              /* display: none; */
              visibility: hidden;
            }

            .logoBK {
              /* display: none; */
              visibility: hidden;
            }
        } 
    }    
`;