import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleCpf(e) {
        setCpf(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '' && cpf !== '') {
            setName('');
            setCpf('');

            navigate("/terms");
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={handleName} />
                    {name}
                </div>

                <div>
                    <label htmlFor="cpf">CPF</label>
                    <input id="cpf" type="text" value={cpf} onChange={handleCpf} />
                    {cpf}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}