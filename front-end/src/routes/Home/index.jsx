// Funcionalidades / Libs:
import { useNavigate } from "react-router-dom";

// Assets:
import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from '../../assets/logo_bk.svg';

// Estilo:
import { Main } from "./styles";


export function Home() {
    const navigate = useNavigate();

    setTimeout(()=> {
        navigate("/login");
    }, 5000);


    return (
        <Main className="fadeIn">

            {/*<img className="redResult" src={RedResult} alt="Resultado vermelho" />*/}
            <div className="logos-footer">
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Logo BK" />
            </div>

        </Main>
    )
}