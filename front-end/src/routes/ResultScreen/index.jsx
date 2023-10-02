import { useNavigate, useLocation } from "react-router-dom";
import {useEffect, useRef} from "react";

import bg_lv1 from '../../assets/results/result_lv_1.png';
import bg_lv2 from '../../assets/results/result_lv_2.png';
import bg_lv3 from '../../assets/results/result_lv_3.png';

import logo_result from '../../assets/logo_result.png';
import share_icon from '../../assets/BK - Seta.png';
import {Main} from "./styles";
import LogoWhopper from '../../assets/Logo_Whopper.png';
import LogoBK from '../../assets/Logo_BK.png';


export function ResultScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state.img;
    const result = location.state.result;
    const myCanvas = useRef();
    const overlay  = useRef();

    useEffect(() => {
        const context = myCanvas.current.getContext("2d");
        const image = new Image();
        image.src = data;
        image.onload = () => {
            // Definindo o overlay de acordo com as novas especificações
            console.log(result);
            /* angry: 0, disgusted: 0, fearful: 0, happy: 0.99, neutral: 0, sad: 0, surprised: 0*/
            const threshold = 0.7;
            overlay.current.className = "overlayResultLv1"

            if(result.surprised > threshold || result.disgusted > threshold)
                overlay.current.className = "overlayResultLv2"

            if(result.angry > threshold || result.sad > threshold)
                overlay.current.className = "overlayResultLv3"

            let factor = image.width/image.height;
            image.width = window.innerHeight*factor;
            image.height = window.innerHeight;

            context.drawImage(image, 0 , 0, window.innerHeight*factor, window.innerHeight);


        };
    }, []);

    async function handleNextPage(){
        console.log(":D");
        let img_data = {
            img: myCanvas.current.toDataURL("image/png")
        };
        navigate("/coupon", { state: img_data });
    }

    return (
        <Main>
        <div>
            <canvas ref={myCanvas} width={window.innerWidth} height={window.innerHeight} style={{ width: '100%', height: 'auto', margin: '0 auto' }} />
            <div ref={overlay} className="overlayResultLv0" onClick={handleNextPage}/>
            {/*<img src={share_icon} style={{position: "fixed", bottom: 0, right: 0}} onClick={handleNextPage} />*/}
        </div>
        <div className="logos_Div">
            <img className="logoWhopper" src={LogoWhopper} alt="Whopper da Ressaca" />
            <img className="logoBK" src={LogoBK} alt="Whopper da Ressaca" />
        </div>
        </Main>
    );
}
