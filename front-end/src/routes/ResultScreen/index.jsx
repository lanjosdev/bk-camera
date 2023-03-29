import { useNavigate, useLocation } from "react-router-dom";
import {useEffect, useRef} from "react";

export function ResultScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state.img;
    const result = location.state.result;
    // data && console.log(result);

    const randomNumber = Math.floor(Math.random() * 100 + 1);

    const myCanvas = useRef();

    useEffect(() => {
        const context = myCanvas.current.getContext("2d");
        const image = new Image();
        image.src = data;
        image.onload = () => {
            let color = "green";
            if(result.emotion_bk === 2)
                color = "yellow";
            if(result.emotion_bk === 3)
                color = "red";

            console.log(image.height, image.width);
            let factor = image.width/image.height;
            console.log(factor);
            console.log(window.innerHeight*factor);
            console.log(window.innerHeight);

            context.drawImage(image,0 , 0, window.innerHeight*factor, window.innerHeight);
            context.beginPath();
            context.lineWidth = 3;
            context.strokeStyle = color;
            context.rect(result.x/2.5, result.y/2, result.w/2, result.h/2);
            context.stroke();

        };
    }, []);


    function handleNextPage() {
        navigate('/coupon');
    }

    async function handleShare() {
        let blob = await fetch(
            document.getElementById("imagetag").src
        ).then((r) => r.blob());

        let file = new File([blob], "googleimage.png", {
            type: "image/png",
        });

        await navigator.share({
            files: [file],
            title: "test share Image"
        }).then(() => {

        });
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <canvas ref={myCanvas} width={window.innerWidth} height={window.innerHeight} />

            {/*<div style={{ width: '90%', height: '55vh', position: 'relative', display: "flex", flexDirection: 'column', alignItems: 'center' }} >*/}
            {/*    {data && <img id="imagetag" src={data} alt="image taked" style={{ width: 'auto', height: '100%', margin: '0 auto' }} />}*/}
            {/*    {data && <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>"Emotion name : {result.emotion_name}</p>}*/}
            {/*    {data && <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>"Emotion Probability: {result.emotion_probaility}</p>}*/}
            {/*    {data && <button onClick={handleNextPage} style={{ width: '100px', padding: '5px 0', cursor: 'pointer' }}>Next</button>}*/}
            {/*    {data && <button onClick={handleShare} style={{ width: '100px', padding: '5px 0', cursor: 'pointer' }}>Share</button>}*/}
            {/*</div>*/}
        </div>
    );
}