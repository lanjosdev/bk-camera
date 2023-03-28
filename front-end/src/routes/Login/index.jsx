import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Main } from "./styles";

import LogoWhopper from '../../assets/Logo_Whopper.png';
import Termos from '../../assets/termos.png';
import NameIcon from '../../assets/cadastro_icone_nome.png';
import CPFicon from '../../assets/cadastro_icone_cpf.png';

export function Login() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleCpf(e) {
        setCpf(e.target.value);
    }

    function handleSubmit(e) {
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
                    <input id="cpf" type="text" value={cpf} onChange={handleCpf} />
                    <img className="formIcons" src={CPFicon} alt="Icone do campo nome" />
                </div>

                <label className="checkbox_label" for="checkboxID">
                    <input className="checkbox_field" type="checkbox" name="check" id="checkboxID" onClick={() => setIsChecked(!isChecked)} />
                    Mesmo de ressaca eu declaro que aceito os termos de compromisso.
                </label>

                <button type="submit">Submit</button>

            </form>
            <div className="imgANDterms_Div">
                <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
                <img className="termos" src={Termos} alt="Termos de uso" />
            </div>
        </Main>
    )
}