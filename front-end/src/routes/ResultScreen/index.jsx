import { useNavigate, useLocation } from "react-router-dom";
import {useEffect, useRef} from "react";

import lv_0 from '../../assets/resultado_verde.png'
import lv_1_01 from '../../assets/frame verde/BK - frame_verde - 001.png'
import lv_1_02 from '../../assets/frame verde/BK - frame_verde - 002.png'
import lv_1_03 from '../../assets/frame verde/BK - frame_verde - 003.png'
import lv_1_04 from '../../assets/frame verde/BK - frame_verde - 004.png'
import lv_1_05 from '../../assets/frame verde/BK - frame_verde - 005.png'
import lv_1_06 from '../../assets/frame verde/BK - frame_verde - 006.png'
import lv_1_07 from '../../assets/frame verde/BK - frame_verde - 007.png'
import lv_1_08 from '../../assets/frame verde/BK - frame_verde - 008.png'
import lv_1_09 from '../../assets/frame verde/BK - frame_verde - 009.png'
import lv_1_10 from '../../assets/frame verde/BK - frame_verde - 010.png'
import lv_1_11 from '../../assets/frame verde/BK - frame_verde - 011.png'
import lv_1_12 from '../../assets/frame verde/BK - frame_verde - 012.png'
import lv_2_1 from '../../assets/frame amarelo/BK - frame_amarelo - 001.png'
import lv_2_2 from '../../assets/frame amarelo/BK - frame_amarelo - 002.png'
import lv_2_3 from '../../assets/frame amarelo/BK - frame_amarelo - 003.png'
import lv_2_4 from '../../assets/frame amarelo/BK - frame_amarelo - 004.png'
import lv_2_5 from '../../assets/frame amarelo/BK - frame_amarelo - 005.png'
import lv_2_6 from '../../assets/frame amarelo/BK - frame_amarelo - 006.png'
import lv_2_7 from '../../assets/frame amarelo/BK - frame_amarelo - 007.png'
import lv_2_8 from '../../assets/frame amarelo/BK - frame_amarelo - 008.png'
import lv_2_9 from '../../assets/frame amarelo/BK - frame_amarelo - 009.png'
import lv_2_10 from '../../assets/frame amarelo/BK - frame_amarelo - 010.png'
import lv_3_1 from '../../assets/frame vermelho/BK - frame_vermelho - 001.png'
import lv_3_2 from '../../assets/frame vermelho/BK - frame_vermelho - 002.png'
import lv_3_3 from '../../assets/frame vermelho/BK - frame_vermelho - 003.png'
import lv_3_4 from '../../assets/frame vermelho/BK - frame_vermelho - 004.png'
import lv_3_5 from '../../assets/frame vermelho/BK - frame_vermelho - 005.png'
import lv_3_6 from '../../assets/frame vermelho/BK - frame_vermelho - 006.png'
import lv_3_7 from '../../assets/frame vermelho/BK - frame_vermelho - 007.png'
import lv_3_8 from '../../assets/frame vermelho/BK - frame_vermelho - 008.png'
import green_frame from '../../assets/frame verde/BK - frame_verde.png'
import yellow_frame from '../../assets/frame amarelo/BK - frame_amarelo.png'
import red_frame from '../../assets/frame vermelho/BK - frame_vermelho.png'
import logo_result from '../../assets/logo_result.png'
import share_icon from '../../assets/BK - Seta.png'

export function ResultScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const frames = {
        1: [lv_1_01, lv_1_02, lv_1_03, lv_1_04, lv_1_05, lv_1_06, lv_1_07, lv_1_08, lv_1_09, lv_1_10, lv_1_11, lv_1_12],
        2: [lv_2_1, lv_2_2, lv_2_3, lv_2_4, lv_2_5, lv_2_6, lv_2_7, lv_2_8, lv_2_9, lv_2_10],
        3: [lv_3_1, lv_3_2, lv_3_3, lv_3_4, lv_3_5, lv_3_6, lv_3_7, lv_3_8]
    }

    const data = location.state.img;
    const result = location.state.result;
    const myCanvas = useRef();

    useEffect(() => {
        const context = myCanvas.current.getContext("2d");
        const image = new Image();
        image.src = data;
        image.onload = () => {

            let choosen_img = lv_0;
            let choosen_frame = green_frame;

            if(result.emotion_bk === 1)
                choosen_img = frames["1"][Math.floor(Math.random() * frames["1"].length)];
            if(result.emotion_bk === 2)
            {
                choosen_frame = yellow_frame;
                choosen_img = frames["2"][Math.floor(Math.random() * frames["2"].length)];
            }
            if(result.emotion_bk === 3)
            {
                choosen_frame = red_frame;
                choosen_img = frames["3"][Math.floor(Math.random() * frames["3"].length)];
            }

            let factor = image.width/image.height;

            let factor_img_width = (image.width/window.innerHeight)*factor;
            let factor_img_height = window.innerHeight/image.height;

            image.width = window.innerHeight*factor;
            image.height = window.innerHeight;

            context.drawImage(image,0 , 0, window.innerHeight*factor, window.innerHeight);

            const box_image = new Image();
            box_image.src = choosen_frame;
            box_image.onload = () => {
                let factor2 = box_image.width/box_image.height;
                let r = {x: (window.innerWidth/5) , y: (window.innerWidth/2.5), w: (window.innerHeight*factor2)/2.5, h: window.innerHeight/2};
                if(result.emotion !== -1) {
                    let r = {x: result.x /5, y: result.y/2 , w: result.w /5, h: result.h / 2};

                    console.log(result);
                    console.log(r);
                }
                context.drawImage(box_image, r.x, r.y, r.w, r.h);
            }

            const frase_img = new Image();
            frase_img.src = choosen_img;
            frase_img.onload = () => {
                let factor_frase = 0.21;
                let w = window.innerWidth*0.9;
                context.drawImage(frase_img, (window.innerWidth/2)-w/2, window.innerHeight*0.07, w, w*factor_frase);
            }

            const res_img = new Image();
            res_img.src = logo_result;
            res_img.onload = () => {
                let h = window.innerWidth*0.544;
                context.drawImage(res_img, 0, window.innerHeight-h, window.innerWidth, h);
            }
        };
    }, []);

    async function handleNextPage(){
        let img_data = {
            img: myCanvas.current.toDataURL("image/png")
        };

        navigate("/coupon", { state: img_data });
    }


    return (
        <div>
            <canvas ref={myCanvas} width={window.innerWidth} height={window.innerHeight} style={{ width: '100%', height: 'auto', margin: '0 auto' }} />
            <img src={share_icon} style={{position: "fixed", bottom: 0, right: 0}} onClick={handleNextPage} />
        </div>
    );
}