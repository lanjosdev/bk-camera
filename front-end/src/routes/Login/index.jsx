import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "../../components/Modal";
import { cpfMask } from "../../utils/cpfMask";
//import { IMaskInput } from "react-imask";
//import ReactInputDateMask from 'react-input-date-mask';
import InputMask from 'react-input-mask';


import { Main } from "./styles";

import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from '../../assets/Logo_BK.png';
import NameIcon from '../../assets/cadastro_icone_nome.png';
import CPFicon from '../../assets/cadastro_icone_cpf.png';

export function Login() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const [isChecked, setIsChecked] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();


    function handleName(e) {
        setName(e.target.value);
    }

    function handleCpf(e) {
        setCpf(cpfMask(e.target.value));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (name !== '' && cpf.length > 9 && isChecked === true)
        {
            let date =  cpf.substring(6, 10)+'-'+cpf.substring(3, 5)+'-'+cpf.substring(0, 2);
            const d = new Date(date);
            const today= new Date();
            let difference = Math.abs(d.getTime() - today.getTime());
            let totalYears = Math.ceil(difference / (1000 * 3600 * 24)) / 365;

            if(totalYears < 18)
            {
                navigate("/");
                return;
            }

            setName('');
            setCpf('');
            setIsChecked(false);
            navigate("/take-picture");
        }
    }

    return (
        <Main>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="inputField_Div">
                    <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" value={name} onChange={handleName} />
                    <img className="formIcons" src={NameIcon} alt="Icone do campo nome" />
                </div>

                <div className="inputField_Div">
                    <label htmlFor="cpf">Data de Nascimento:</label>
                    <InputMask mask="99/99/9999"  onChange={handleCpf} ></InputMask>
                    <img className="formIcons" src={CPFicon} alt="Icone do campo nome" />
                </div>

                <label className="checkbox_label" htmlFor="checkboxID">
                    <input className="checkbox_field" type="checkbox" name="check" onClick={() => setIsChecked(!isChecked)} />
                    <p>Mesmo de ressaca eu declaro que aceito <br/><span onClick={() => setModalIsOpen(true)}><b>termos</b></span> de compromisso.</p>

                </label>

                <button type="submit">Enviar</button>

            </form>
            <div className="logos_Div">
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Whopper da Ressaca" />
            </div>
            {modalIsOpen && <Modal closeModal={setModalIsOpen} />}
        </Main>
    )
}
