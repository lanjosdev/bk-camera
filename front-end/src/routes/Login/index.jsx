import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "../../components/Modal";
import { cpfMask } from "../../utils/cpfMask";

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
    // console.log("cpf: ", cpf);
    // console.log("nome:", name)
    
    async function handleSubmit(e) {
        e.preventDefault();
        if (name !== '' && cpf !== '' && isChecked === true) {
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
                    <label htmlFor="cpf">CPF:</label>
                    <input id="cpf" type="text" value={cpf} onChange={handleCpf} maxLength={11}/>
                    <img className="formIcons" src={CPFicon} alt="Icone do campo nome" />
                </div>

                <label className="checkbox_label" htmlFor="checkboxID">
                    <input className="checkbox_field" type="checkbox" name="check" onClick={() => setIsChecked(!isChecked)} />
                    <p onClick={() => setModalIsOpen(true)}>Termos de uso.</p>
                    { modalIsOpen && <Modal closeModal={setModalIsOpen} /> }
                </label>

                <button type="submit">Enviar</button>

            </form>
            <div className="logos_Div">
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="logoBK" src={LogoBK} alt="Whopper da Ressaca" />
            </div>
        </Main>
    )
}