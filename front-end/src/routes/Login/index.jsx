// Funcionalidades / Libs:
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Components:
import { Modal } from "../../components/Modal";
// import { cpfMask } from "../../utils/cpfMask";
//import { IMaskInput } from "react-imask";
//import ReactInputDateMask from 'react-input-date-mask';
import InputMask from 'react-input-mask';

// Assets:
import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from '../../assets/logo_bk.svg';
import NameIcon from '../../assets/cadastro_icone_nome.png';
import NascIcon from '../../assets/cadastro_icone_cpf.png';

// Estilo:
import { Main } from "./styles";


export function Login() {
    const nomeRef = useRef('');
    const nascRef = useRef('');
    // const [name, setName] = useState('');
    // const [cpf, setCpf] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();

    // function handleName(e) {
    //     setName(e.target.value);
    // }
    // function handleCpf(e) {
    //     setCpf(e.target.value);
    // }

    async function handleSubmit(e) {
        e.preventDefault();

        const name = nomeRef.current?.value;
        const nasc = nascRef.current?.value;

        if (name !== '' && nasc.length > 9 && isChecked === true)
        {
            let date =  nasc.substring(6, 10)+'-'+nasc.substring(3, 5)+'-'+nasc.substring(0, 2);
            const d = new Date(date);
            const today= new Date();
            let difference = Math.abs(d.getTime() - today.getTime());
            let totalYears = Math.ceil(difference / (1000 * 3600 * 24)) / 365;

            if(totalYears < 18)
            {
                navigate("/");
                return;
            }

            // setName('');
            // setCpf('');
            setIsChecked(false);
            navigate("/take-picture");
        }
    }

    return (
        <Main className="fadeIn">

            <div className="content-main">
                <h1>Cadastro</h1>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="inputField_Div">
                        <label htmlFor="name">Nome:</label>
                        <input id="name" type="text" ref={nomeRef} required/>
                        <img className="formIcons" src={NameIcon} alt="Icone do campo nome" />
                    </div>

                    <div className="inputField_Div">
                        <label htmlFor="nasc">Data de Nascimento:</label>
                        <InputMask id="nasc" mask="99/99/9999" placeholder="__/__/____" ref={nascRef} required></InputMask>
                        <img className="formIcons" src={NascIcon} alt="Icone do campo nascimento" />
                    </div>

                    <label 
                    className="checkbox_label" 
                    htmlFor="checkboxID">
                        <input id="checkboxID" className="checkbox_field" type="checkbox" name="check" 
                        onClick={() => setIsChecked(!isChecked)} 
                        required />
                        <p>
                            Mesmo de ressaca eu declaro que aceito <span onClick={() => setModalIsOpen(true)}>termos</span> de compromisso.
                        </p>
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="logos-footer">
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Logo BK" />
            </div>

            {/* Exibição de modal */}
            {modalIsOpen && <Modal closeModal={setModalIsOpen} />}

        </Main>
    )
}
