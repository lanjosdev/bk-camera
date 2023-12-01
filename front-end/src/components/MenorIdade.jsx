import { MenorBackground } from './menor-style';

// Assets:
import menorIdade from '../assets/menor-idade.png';


export function Menor({ closeModal }) {
    return(
        <MenorBackground className="fadeIn">

            <button onClick={() => closeModal(false)}>X</button>

            <img src={menorIdade} alt="Mensagem de menor de idade" />

        </MenorBackground>
    );
}
