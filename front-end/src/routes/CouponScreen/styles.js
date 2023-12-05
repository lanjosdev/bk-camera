import styled from 'styled-components';
import LOGOHACK from '../../assets/bg_hacker.png';

export const Main = styled.main`
  padding: 0 20px;
  @media screen and (max-width: 480px) {
      padding: 0 15px;
  }
  background: url(${LOGOHACK});
  background-size: cover;//55rem; //780px
  background-position: center; //49% 45%
  background-repeat: no-repeat;

  width: 100%;
  height: 100vh;
  max-height: fill-available;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: white;
  font-family: 'auxMono';

  overflow-y: auto;

  .headerCupom {

    .headerA {
      max-width: 32rem;
    }

    .cupom-desconto {
      display: flex;
      flex-direction: column;
      gap: .7rem;

      p {
        font-size: 1.2rem;
        text-align: justify;
      }
      .cupom {
        /* max-width: 2rem; */
        font-size: 2rem;
        text-align: center;
        border: 1px solid #fff;
        padding: .6rem .5rem .4rem;
      }
      .headerB {
        max-width: 32rem;
      }
    }
  }




  .logos_Div {
    line-height: 0;

    .logoWhopper {
      max-width: 30rem;
    }
  }

  .moderation {
    position: absolute;
    right: 0px;
    top: 25%;
    height: 50%;
  }
`;