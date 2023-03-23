import { useNavigate } from "react-router-dom";
import { Main } from "./styles";

import RedResult from '../../assets/resultado_vermelho.png';
import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from '../../assets/Logo_BK.png';

export function Home() {
    const navigate = useNavigate();

    return (
        <Main onClick={() => navigate("/login")}>
            <img className="redResult" src={RedResult} alt="Resultado vermelho" />
            <div>
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Whopper da Ressaca" />
            </div>
        </Main>
    )
}

//Background tela inteira sem rolagem
//#F3EADA cor do bg do loading do boneco e do bg do combo na tela final
//#48281B cor da fonte na tela de loading e tela final