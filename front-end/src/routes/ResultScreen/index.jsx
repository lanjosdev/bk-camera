import { useNavigate, useLocation } from "react-router-dom";

export function ResultScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state.img;
    const result = location.state.result;
    data && console.log(result);

    const randomNumber = Math.floor(Math.random() * 100 + 1);

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
            <h1>Result Screen</h1>
            <div style={{ width: '90%', height: '55vh', position: 'relative', display: "flex", flexDirection: 'column', alignItems: 'center' }} >
                {data && <img id="imagetag" src={data} alt="image taked" style={{ width: 'auto', height: '100%', margin: '0 auto' }} />}
                {data && <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>"Emotion name : {result.emotion_name}</p>}
                {data && <p style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>"Emotion Probability: {result.emotion_probaility}</p>}
                {data && <button onClick={handleNextPage} style={{ width: '100px', padding: '5px 0', cursor: 'pointer' }}>Next</button>}
                {data && <button onClick={handleShare} style={{ width: '100px', padding: '5px 0', cursor: 'pointer' }}>Share</button>}
            </div>
        </div>
    );
}