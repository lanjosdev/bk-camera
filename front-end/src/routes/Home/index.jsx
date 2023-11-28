import { useNavigate } from "react-router-dom";
import { Main } from "./styles";

import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from '../../assets/logo_bk.svg';

export function Home() {
    const navigate = useNavigate();

    setTimeout(()=> {
        navigate("/login");
    }, 5000);


    return (
        <Main className="fadeIn">

            {/*<img className="redResult" src={RedResult} alt="Resultado vermelho" />*/}
            <div>
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Logo BK" />
            </div>

        </Main>
    )
}