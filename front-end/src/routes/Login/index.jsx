// Funcionalidades / Libs:
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Components:
import { Modal } from "../../components/Modal";
import { Menor } from "../../components/MenorIdade";
// import { cpfMask } from "../../utils/cpfMask";
//import { IMaskInput } from "react-imask";
//import ReactInputDateMask from 'react-input-date-mask';
import InputMask from 'react-input-mask';

// Assets:
import LogoWhopper from '../../assets/Logo_WhopperNew.png';
import LogoBK from '../../assets/logo_bk.svg';
import NameIcon from '../../assets/cadastro_icone_nome.png';
import NascIcon from '../../assets/cadastro_icone_cpf.png';

// Estilo:
import { Main } from "./styles";


export function Login() {
    const nomeRef = useRef('');
    const nascRef = useRef('');
    const [isChecked, setIsChecked] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorNasc, setErrorNasc] = useState(false);
    const [modalIdadeOpen, setModalIdadeOpen] = useState(false);

    const navigate = useNavigate();


    function formatDate(date) {
        const [day, month, year] = date.split("/");
        if(year <= 1900) {
            return NaN;
        } 
        
        return `${year}-${month}-${day}`;
    }

    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const name = nomeRef.current?.value;
        const nasc = (nascRef.current?.value).replace(/_/g, "");
        // console.log(nasc);
        const inputNasc = document.getElementById("nasc");
        if(nasc.length < 10) {
            setErrorNasc(true);
            inputNasc.focus();
        } else {
            setErrorNasc(false);
        }

        // console.log(formatDate(nasc));
        if (name !== '' && nasc.length === 10 && isChecked === true) {    
            // let date =  nasc.substring(6, 10)+'-'+nasc.substring(3, 5)+'-'+nasc.substring(0, 2);
            // const d = new Date(date);
            // const today= new Date();
            // let difference = Math.abs(d.getTime() - today.getTime());
            // let totalYears = Math.ceil(difference / (1000 * 3600 * 24)) / 365;
            const idade = getAge(formatDate(nasc));
            if(isNaN(idade) || idade < 0) {
                setErrorNasc(true);
                inputNasc.focus();
                return;
            } else {
                setErrorNasc(false);
            }

            if(idade < 18) {
                setModalIdadeOpen(true);
                console.log('MENOR');
            } else {
                setErrorNasc(false);
                console.log('liga CAMERA');
                navigate("/take-picture");
            }

            setIsChecked(false);
        } else {
            console.log("Form Incompleto");
        }
    }


    return (
        <Main className="fadeIn" erroNasc={errorNasc}>

            {!modalIdadeOpen &&
            <div className="content-main">
                <h1>Cadastro</h1>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="inputField_Div">
                        <label htmlFor="nomi">Nome:</label>
                        <input id="nomi" type="text" ref={nomeRef} required />
                        <img className="formIcons" src={NameIcon} alt="Icone do campo nome" />
                    </div>

                    <div className="inputField_Div nasc">
                        <label htmlFor="nasc">Data de Nascimento:</label>
                        <InputMask id="nasc" mask="99/99/9999" placeholder="__/__/____" ref={nascRef}></InputMask>
                        <img className="formIcons" src={NascIcon} alt="Icone do campo nascimento" />
                    </div>

                    <label className="checkbox_label">
                        <input 
                        className="checkbox_field" 
                        type="checkbox" 
                        checked={isChecked}
                        name="check" 
                        onChange={() => setIsChecked(!isChecked)} 
                        required
                        />
                        <p>
                            Mesmo de ressaca, eu declaro que aceito os <span onClick={() => setModalIsOpen(true)}>termos</span> de compromisso.
                        </p>
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            }

            <div className="logos-footer">
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Logo BK" />
            </div>

            {/* Exibição de modal */}
            {modalIsOpen && <Modal closeModal={setModalIsOpen} />}

            {/* Exibição mensagem menor de idade */}
            {modalIdadeOpen && <Menor closeModal={setModalIdadeOpen} />}

        </Main>
    )
}
