import { useNavigate, useLocation } from "react-router-dom";
import {useEffect, useRef} from "react";

import bg_lv1 from '../../assets/results/result_lv_1.png';
import bg_lv2 from '../../assets/results/result_lv_2.png';
import bg_lv3 from '../../assets/results/result_lv_3.png';

import {Main} from "./styles";
import LogoWhopper from '../../assets/logo_bk_com_hamb.png';

export function ResultScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state.img;
    const result = location.state.result;
    const voucher = location.state.voucher;
    const myCanvas = useRef();
    const overlay  = useRef();

    useEffect(() => {
        const context = myCanvas.current.getContext("2d");
        const image = new Image();
        image.src = data;
        image.onload = () => {
            // Definindo o overlay de acordo com as novas especificações
            /* angry: 0, disgusted: 0, fearful: 0, happy: 0.99, neutral: 0, sad: 0, surprised: 0*/
            const threshold = 0.7;
            let chosenResultImg = bg_lv1;

            if(result.surprised > threshold || result.disgusted > threshold)
                chosenResultImg = bg_lv2;

            if(result.angry > threshold || result.sad > threshold)
                chosenResultImg = bg_lv3;

            let factor = image.width/image.height;
            image.width = (window.innerHeight*factor)*1.20;
            image.height = window.innerHeight*1.20;

            let minusY = 0;//(window.innerHeight*0.15)*-1;
            context.drawImage(image, 0 , minusY, window.innerHeight*factor, window.innerHeight); // imagem da camera

            const chosenImg = new Image();
            chosenImg.src = chosenResultImg;
            chosenImg.onload = () => {
                let factor2 = chosenImg.width/chosenImg.height;
                let newWidth = window.innerHeight*factor2;
                let newXPos = (window.innerWidth - newWidth)/2;
                let r = {x: newXPos, y: minusY, w: newWidth, h: window.innerHeight};
                context.drawImage(chosenImg, r.x, r.y, r.w, r.h);
            }

            const wooperLogo = new Image();
            wooperLogo.src = LogoWhopper;
            wooperLogo.onload = () =>{
                let factor = wooperLogo.height/wooperLogo.width;
                let newWidth = window.innerWidth*0.8;
                let newXPos = (window.innerWidth - newWidth)/2;
                let r = {x: newXPos, y: window.innerHeight*0.785, w: newWidth, h: window.innerHeight};
                let newYPos = (window.innerHeight - (newWidth*factor)) -20;
                context.drawImage(wooperLogo, r.x, newYPos, newWidth, newWidth*factor);
            }

        };
    }, []);

    async function handleNextPage(){
        let img_data = {
            img: myCanvas.current.toDataURL("image/png"),
            data: result,
            voucher:voucher
        };
        navigate("/coupon", { state: img_data });
    }

    return (
        <Main>
        <div>
            <canvas ref={myCanvas} width={window.innerWidth} height={window.innerHeight} />
            <div ref={overlay} className="overlayResultLv0" onClick={handleNextPage}/>
        </div>
        </Main>
    );
}
