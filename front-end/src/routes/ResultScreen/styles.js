import styled from 'styled-components';
import FlameSansRegular from '../../fonts/FlameSans-Regular.otf';
import FlameRegular from '../../fonts/Flame-Regular.otf';
import FlameBold from '../../fonts/Flame-Bold.ttf';

import bg_lv1 from '../../assets/results/result_lv_1.png';
import bg_lv2 from '../../assets/results/result_lv_2.png';
import bg_lv3 from '../../assets/results/result_lv_3.png';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    justify-content: center; //Teste
    flex-direction: column;
    gap: 2rem;

      .overlayResultLv0{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
  
      .overlayResultLv1
      {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;
        background: url(${bg_lv1});        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .overlayResultLv2{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;
        background: url(${bg_lv2});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .overlayResultLv3{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 2;
        background: url(${bg_lv3});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .logos_Div {
        display: flex;
        flex-direction: column;
        align-items: center;
        //gap: 1rem;
      }
  
      .logoWhopper {
        width: 21rem;
        position: absolute;
        bottom: 6.5rem;
      }
    
      .logoBK {
        width: 11rem;
        position: absolute;
        bottom: 3rem;
      }
    
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