import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import {useEffect, useState} from 'react';
import { Main } from './styles';
import 'react-toastify/dist/ReactToastify.css';

import LogoWhopper from '../../assets/logo_bk_com_hamb.png';
import shareImg from '../../assets/results/resultado.png';
import moderation from '../../assets/bg_moderacao.png';
import thankyou from '../../assets/participacao.png';

import headerLv1 from '../../assets/cupom/cupom_header_lv1.png';
import headerLv2 from '../../assets/cupom/cupom_header_lv2.png';
import headerLv3 from '../../assets/cupom/cupom_header_lv3.png';
import footerLv1 from '../../assets/cupom/cupom_footer_lv1.png';
import footerLv2 from '../../assets/cupom/cupom_footer_lv2.png';
import footerLv3 from '../../assets/cupom/cupom_footer_lv3.png';
import bodyLv1 from '../../assets/cupom/cupom_body_lv1.png';
import bodyLv2 from '../../assets/cupom/cupom_body_lv2.png';
import bodyLv3 from '../../assets/cupom/cupom_body_lv3.png';

export function CouponScreen() {

    const location = useLocation();
    const blob = location.state.img;
    const data = location.state.data;
    const voucher = location.state.voucher;
    const threshold = 0.7;

    useEffect(()=>{
        notify();
        navigator.clipboard.writeText(voucher);
    },[])

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

    function handleCouponLink()
    {
        window.location.href = "https://delivery.burgerking.com.br/";
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
        <Main style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <img src={moderation} className="moderation" />
            <div className='headerCupom'>
                <img src={headerImg} className="headerA" />
                {isNotVoucher === false ? (
                        <>
                            <div className="cupom" >{voucher}</div>
                            <img src={footerImg} className="headerB" onClick={handleCouponLink} />
                        </>
                    ) :
                    (
                        <>
                            <img src={thankyou} className="headerC" />
                        </>
                    )
                }
                <img src={bodyImg} className="headerC" />

            </div>
            <div className='logos_Div'>
                <img onClick={handleShare} src={shareImg} className="headerShare" />
                <img src={LogoWhopper} className="logoWhopper" alt="Logo whopper" />
            </div>
            <ToastContainer />
        </Main>
    );
}