import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Terms() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        if (isChecked === true) {
            navigate("/take-picture");
        }
    }

    function handleCheked() {
        setIsChecked(!isChecked);
    }
    console.log(isChecked);

    return (
        <>
            <p>Texto dos termos de uso aqui (imagem ou texto digitado?)</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input type="checkbox" name="check" onClick={() => handleCheked()} />
                        Aceito os termos
                    </label>
                </div>

                <button type="submit">Agree</button>
            </form>
        </>
    );
}