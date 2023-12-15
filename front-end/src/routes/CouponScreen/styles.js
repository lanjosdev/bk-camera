import styled from 'styled-components';
import LOGOHACK from '../../assets/bg_hacker.png';

export const Main = styled.main`
  padding: 0 20px;
  @media screen and (max-width: 480px) {
      padding: 0 15px;
  }
  /* background: url(${LOGOHACK});
  background-size: cover;//55rem; //780px
  background-position: center; //49% 45%
  background-repeat: no-repeat; */


  display: flex;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  /* max-height: fill-available; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.3rem;  

  color: white;
  font-family: 'auxMono';
  overflow-y: auto;

  .sem_cupons {
    margin-top: -4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    img {
      max-width: 30rem;
      @media screen and (min-width: 800px) {
        max-width: 60rem;        
      }
    }
  }
  .textoSemCupom {
    padding-bottom: 5rem;
    max-width: 32rem;
    img {
      transform: translateY(-1.5rem)
    }
  }


  .headerCupom {
    
    .headerA {
      margin-top: 2.5rem;
      margin-bottom: 1rem;
      max-width: 32rem;
      @media screen and (min-width: 800px) {
        max-width: 60rem;        
      }
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

      @media screen and (min-width: 800px) {
        align-items: center;
        gap: 1.5rem;
        
        p {
          font-size: 2.2rem;
        }
        .cupom {
          /* max-width: 2rem; */
          font-size: 4rem;
          text-align: center;
          border: 1px solid #fff;
          padding: .6rem .5rem .4rem;
        }
        .headerB {
          max-width: 55rem;
        }
      }
    }
  }
  
  .bodyCupom {
    display: flex;
    flex-direction: column;
    align-items: center;

    .headerC {
      max-width: 60rem;
      @media screen and (max-width: 480px) {
        max-width: 31rem;
      }
      @media screen and (min-width: 800px) {
        width: 100%;
        min-width: 60rem;        
      }
    }
    .headerShare {
      transform: translateY(-2rem);
      align-self: flex-end;
      max-width: 13rem;
      z-index: 5;
    }
  }

  .logos_Div {
    line-height: 0;

    .logoWhopper {
      max-width: 30rem;
      @media screen and (min-width: 800px) {
        max-width: 60rem;        
      }
    }

    &.top {
      padding-top: 3rem;
    }
  }

  /* .moderation {
    position: absolute;
    right: 0px;
    top: 25%;
    height: 50%;
  } */
`;