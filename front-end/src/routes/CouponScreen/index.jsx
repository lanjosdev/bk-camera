import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import {useEffect} from 'react';

import 'react-toastify/dist/ReactToastify.css';

import LogoHeader from '../../assets/cupom/logo_header.png';
import SemCupons from '../../assets/cupom/sem_cupons.png';
import textSemCupom from '../../assets/cupom/texto_sem_cupom.png';
import LogoWhopper from '../../assets/logo_bk_com_hamb.png';
import shareImg from '../../assets/cupom/COMPARTILHAR.png';
import moderation from '../../assets/bg_moderacao.png';
// import thankyou from '../../assets/participacao.png';

import headerLv1 from '../../assets/cupom/suges_header_lv1.png';
import headerLv2 from '../../assets/cupom/suges_header_lv2.png';
import headerLv3 from '../../assets/cupom/suges_header_lv3.png';
import footerLv1 from '../../assets/cupom/lv1_descontoNew.png';
import footerLv2 from '../../assets/cupom/lv2_descontoNew.png';
import footerLv3 from '../../assets/cupom/lv3_descontoNew.png';
import bodyLv1 from '../../assets/cupom/combo_body_lv1.png';
import bodyLv2 from '../../assets/cupom/combo_body_lv2.png';
import bodyLv3 from '../../assets/cupom/combo_body_lv3.png';

import { Main } from "./styles";


export function CouponScreen() {
    const location = useLocation();
    const blob = location.state.img;
    const data = location.state.data;
    const voucher = location.state.voucher;
    const threshold = 0.7;

    // useEffect(()=>{
    //     notify();
    //     navigator.clipboard.writeText(voucher);
    // }, []);

    const notify = () => toast("Cupom copiado !",{
        position: "top-left",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
    });

    let headerImg = headerLv1;
    let footerImg = footerLv1;
    let bodyImg = bodyLv1;


    if(data.surprised > threshold || data.disgusted > threshold) {
        headerImg = headerLv2;
        footerImg = footerLv2;
        bodyImg = bodyLv2;
    }

    if(data.angry > threshold || data.sad > threshold) {
        headerImg = headerLv3;
        footerImg = footerLv3;
        bodyImg = bodyLv3;
    }

    // const [couponCode, setCouponCode] = useState('Duploressaca20');
    // const [isCopied, setIsCopied] = useState(false);

    const isNotVoucher = (voucher === 'none');

    // function handleCopyBtn() {
    //     if(isNotVoucher)
    //         return;
    //     navigator.clipboard.writeText(voucher).then(()=>{
    //         setIsCopied(true);
    //     });
    // }

    // if (isCopied) {
    //     setTimeout(() => {
    //         setIsCopied(false);
    //     }, 4000);
    // }

    function direcionaCupomLink()
    {
        window.location.href = "https://delivery.burgerking.com.br/";
    }

    function handleClicouVoucher() {
        notify();
        navigator.clipboard.writeText(voucher);

        setTimeout(direcionaCupomLink, 1500);
    }

    async function handleShare() {
        let b = await fetch(blob).then((r) => r.blob());
        let file = new File([b], "bkimage.png", {
            type: "image/png",
        });
        await navigator.share({
            files: [file]
        }).then(() => { });
    }

    return (
        <>
        <Main>

            {isNotVoucher ? (
                <>
                <div className="logos_Div top">
                    <img src={LogoHeader} className="logoWhopper" alt="" />
                </div>

                <div className="sem_cupons">
                    <img src={SemCupons} alt="" />
                </div>

                <div className="textoSemCupom">
                    <img src={textSemCupom} alt="" />
                </div>
                </>
            ) : (
                <>
                <div className='headerCupom'>
                    <img src={headerImg} className="headerA" />
                
                    <div className="cupom-desconto">
                        <p>TOQUE PARA USAR O CUPOM DE DESCONTO:</p>
                        <div className="cupom" onClick={handleClicouVoucher}>
                            {isNotVoucher ? 'CÓDIGO PADRÃO' : voucher}
                        </div>
                        <img src={footerImg} className="headerB" />
                    </div>
                </div>
    
                <div className="bodyCupom">
                    <img src={bodyImg} className="headerC" />
                    <img onClick={handleShare} src={shareImg} className="headerShare" />
                </div>
    
                <div className='logos_Div'>
                    <img src={LogoWhopper} className="logoWhopper" alt="Logo whopper" />
                </div>
    
                <img src={moderation} className="moderation" />
                </>
            )}



        </Main>
        <ToastContainer />
        </>
    );
}