import { useState } from 'react';
import { Main } from './styles';

import LogoWhopper from '../../assets/logo_whopper.svg';
import ComboWhopper from '../../assets/imagem_combo.png';
import LogoBK from '../../assets/logo_bk.svg';

export function CouponScreen() {
    const [couponCode, setCouponCode] = useState('DUPLORESSACA20');
    const [isCopied, setIsCopied] = useState(false);

    function handleCopyBtn() {
        navigator.clipboard.writeText(couponCode);
        setIsCopied(true);
    }

    if (isCopied) {
        setTimeout(() => {
            setIsCopied(false);
        }, 4000);
    }

    return (
        <Main style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div className='first_Div'>
                <p className='first_text'>Pra curar essa ressaca só um combo de</p>
                <h1 className='whopper_text'>Whopper <br />duplo</h1>
            </div>
            <div className='second_Div'>
                <p onClick={handleCopyBtn} className="combo_code">Duploressaca20</p>
                <img src={ComboWhopper} className="comboWhopper" alt="combo whopper" />
            </div>
            <div className='logos_Div'>
                <img src={LogoWhopper} className="logoWhopper" alt="Logo whopper" />
                <img src={LogoBK} className="logoBK" alt="Logo burguer King" />
            </div>
        </Main>
    );
}