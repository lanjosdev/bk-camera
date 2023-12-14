import styled from 'styled-components';
import FlameSansRegular from '../../fonts/FlameSans-Regular.otf';
import FlameRegular from '../../fonts/Flame-Regular.otf';
import FlameBold from '../../fonts/Flame-Bold.ttf';

// import bg_lv1 from '../../assets/results/result_lv_1.png';
// import bg_lv2 from '../../assets/results/result_lv_2.png';
// import bg_lv3 from '../../assets/results/result_lv_3.png';

export const Main = styled.div`
    width: 100%;
    //height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    justify-content: center; //Teste
    flex-direction: column;
    gap: 2rem;

    .main-content {
      display: flex;
      justify-content: center;

      .overlayResultLv0 {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }  
          
      canvas
      {        
        width: 100%;
        height: auto;
        margin: 0 auto;
      }      

      /* .quadro {
        position: absolute;
        z-index: 3;
        bottom: 33%;
        width: 70%;
        padding-bottom: 4%;
        height: 100%;
        max-height: 32.5rem;
        background-color: #0005;

        display: flex;
        justify-content: center;
        align-items: flex-end;

        img {
          max-width: 11rem;
        }
      } */
    }

  
      /* .logoWhopper {
        width: 21rem;
        position: absolute;
        bottom: 6.5rem;
      }
    
      .logoBK {
        width: 11rem;
        position: absolute;
        bottom: 3rem;
      } */
    
     @font-face {
        font-family: 'bkFont1';
        src: url(${FlameSansRegular});
        font-weight: 300;
    }

    @font-face {
        font-family: 'bkFont2';
        src: url(${FlameRegular});
        font-weight: 300;
    }

    @font-face {
        font-family: 'bkFont3';
        src: url(${FlameBold});
        font-weight: 600;
    }
   
`;