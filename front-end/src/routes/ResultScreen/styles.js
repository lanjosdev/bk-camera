import styled from 'styled-components';
import FlameSansRegular from '../../fonts/FlameSans-Regular.otf';
import FlameRegular from '../../fonts/Flame-Regular.otf';
import FlameBold from '../../fonts/Flame-Bold.ttf';
export const Main = styled.div`
    width: 100%;
    height: 100vh;
    max-height: fill-available;

    display: flex;
    align-items: center;
    justify-content: center; //Teste
    flex-direction: column;
    gap: 2rem;
    
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